function log(...data) {
    console.log("SWv1.0", ...data);
}
log("SW Script executing - adding event listeners");

const STATIC_CACHE_NAME = 'loocator-static-v0';

self.addEventListener('install', event => {
    log('install', event);
    event.waitUntil(
        caches.open(STATIC_CACHE_NAME).then(cache => {
            return cache.addAll([
                '/offline',
                '/favorites',
                // CSS
                '/css/favorites.css',
                '/css/offline.css',
                // JavaScript
                '/js/APIClient.js',
                '/js/building-page.js',
                '/js/campus.js',
                '/js/common.js',
                '/js/favorites.js',
                '/js/floors-page.js',
                '/js/HTTPClient.js',
                '/js/login.js',
                '/js/select-bathroom.js',
                '/js/serviceWorkerStartUp.js',
                '/js/settings.js',
                '/js/signup.js',
                // External Resources
                'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
                'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css',
            ]);
        })
    );
});

self.addEventListener('activate', event => {
    log('activate', event);
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cacheName => {
                    return cacheName.startsWith('loocator-') && cacheName != STATIC_CACHE_NAME;
                }).map(cacheName => {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    var requestUrl = new URL(event.request.url);
  
    // Treat API calls (to our API) differently
    if (requestUrl.origin === location.origin && requestUrl.pathname.startsWith('/api')) {
      // If we are here, we are intercepting a call to our API
      if (event.request.method === "GET") {
        // Only intercept (and cache) GET API requests
        event.respondWith(networkFirst(event.request));
      }
    } else {
      // If we are here, this was not a call to our API
      event.respondWith(cacheFirst(event.request));
    }
  });


function cacheFirst(request) {
    return caches.match(request)
        .then(response => {
            //Return a response if we have one cached. Otherwise, get from the network
            return response || fetchAndCache(request);
        })
        .catch(error => {
            return caches.match('/offline');
        })
}



function fetchAndCache(request) {
    return fetch(request).then(response => {
        var requestUrl = new URL(request.url);
        //Cache everything except login
        if (response.ok && !requestUrl.pathname.startsWith('/login')) {
            caches.open(STATIC_CACHE_NAME).then((cache) => {
                cache.put(request, response);
            });
        }
        return response.clone();
    });
}

function networkFirst(request) {
    return fetch(request).then(response => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
            }

            var responseToCache = response.clone();
            caches.open(STATIC_CACHE_NAME)
                .then(cache => {
                    cache.put(request, responseToCache);
                });
            return response;
        })
        .catch(error => {
            return caches.match(request).then(cachedResponse => {
                    return cachedResponse || caches.match('/offline');
                });
        });
}

self.addEventListener('message', event => {
    log('message', event.data);
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});