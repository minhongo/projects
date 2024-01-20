const express = require('express');
const frontendRouter = express.Router();

frontendRouter.use(express.static('static'));
frontendRouter.use(express.urlencoded({extended: true}));

/** resolve method to turn path into string 
 * before sendFile to avoid 403 Forbidden because of "../" */
const path = require('path');
const html_dir = path.resolve(__dirname + '/../static/');

// const app = express();
// app.use(express.static(path.join(__dirname, 'src')));

//Index Page (Login) + Login none user

frontendRouter.get('/login', (req, res) => {
    res.sendFile(`${html_dir}/index.html`);
});
frontendRouter.get('/', (req, res) => {
    res.sendFile(`${html_dir}/index.html`);
});
frontendRouter.get('/css/login.css', (req, res) => {
    res.sendFile(path.join(html_dir, 'css', 'login.css'));
});
frontendRouter.get('/images/logo-light.png', (req, res) => {
    res.sendFile(path.join(html_dir, 'images', 'logo-light.png'));
});
frontendRouter.get('/images/loocator-text.png', (req, res) => {
    res.sendFile(path.join(html_dir, 'images', 'loocator-text.png'));
});
frontendRouter.get('/js/login.js', (req, res) => {
    res.sendFile(path.join(html_dir, 'js', 'login.js'));
});


// register
frontendRouter.get('/signup', (req, res) => {
    res.sendFile(`${html_dir}/templates/sign-up.html`);
});
frontendRouter.get('/css/signup.css', (req, res) => {
    res.sendFile(path.join(html_dir, 'css', 'signup.css'));
});
frontendRouter.get('/js/signup.js', (req, res) => {
    res.sendFile(path.join(html_dir, 'js', 'signup.js'));
});

//Settings
frontendRouter.get('/settings', (req, res) => {
    res.sendFile(`${html_dir}/templates/settings.html`);
});
frontendRouter.get('/js/settings.js', (req, res) => {
    res.sendFile(path.join(html_dir, 'js', 'settings.js'));
});
frontendRouter.get('/css/settings.css', (req, res) => {
    res.sendFile(path.join(html_dir, 'css', 'settings.css'));
});

// Select campus
frontendRouter.get('/campuses', (req, res) => {
    res.sendFile(`${html_dir}/templates/campus.html`);
});
frontendRouter.get('/css/select-campus.css', (req, res) => {
    res.sendFile(path.join(html_dir, 'css', 'select-campus.css'));
});
frontendRouter.get('/js/campus.js', (req, res) => {
    res.sendFile(path.join(html_dir, 'js', 'campus.js'));
});

//Select building page
frontendRouter.get('/buildings', (req, res) => {
    res.sendFile(`${html_dir}/templates/select-building.html`);
});
frontendRouter.get('/css/select-building.css', (req, res) => {
    res.sendFile(path.join(html_dir, 'css', 'select-building.css'));
});
frontendRouter.get('/js/building-page.js', (req, res) => {
    res.sendFile(path.join(html_dir, 'js', 'building-page.js'));
});

//Select floor page
frontendRouter.get('/floors', (req, res) =>  {
    res.sendFile(`${html_dir}/templates/select-floor.html`);
});

frontendRouter.get('/:buildingName/floors', (req, res) => {
    res.sendFile(`${html_dir}/templates/select-floor.html`);
});
frontendRouter.get('/js/floors-page.js', (req, res) => {
    res.sendFile(path.join(html_dir, 'js', 'floors-page.js'));
});
frontendRouter.get('/css/floors.css', (req, res) => {
    res.sendFile(path.join(html_dir, 'css', '/floors.css'));
});


// Bathroom overview
frontendRouter.get('/:buildingName/:floorName/:bathroom', (req, res) => {
    res.sendFile(`${html_dir}/templates/bathroom-overview.html`);
});

// THIS ONE ISNT WORKING FOR SOME REASON???
frontendRouter.get('/js/overview-page.js', (req, res) => {
    res.sendFile(path.join(html_dir, 'js', 'overview-page.js'));
});

//Select bathroom page
frontendRouter.get('/bathrooms', (req, res) => {
    res.sendFile(`${html_dir}/templates/select-bathroom.html`);
});
frontendRouter.get('/:floorName/bathrooms', (req, res) => {
    res.sendFile(`${html_dir}/templates/select-bathroom.html`);
});
frontendRouter.get('/:buildingName/:floorName/bathrooms', (req, res) => {
    res.sendFile(`${html_dir}/templates/select-bathroom.html`);
});
frontendRouter.get('/:section/bathrooms', (req, res) => {
    res.sendFile(`${html_dir}/templates/select-bathroom.html`);
});
frontendRouter.get('/js/select-bathroom.js', (req, res) => {
    res.sendFile(path.join(html_dir, 'js', 'select-bathroom.js'));
});
frontendRouter.get('/css/select-bathroom.css', (req, res) => {
    res.sendFile(path.join(html_dir, 'css', '/select-bathroom.css'));
});
frontendRouter.get('/js/select-bathroom.js', (req, res) => {
    res.sendFile(path.join(html_dir, 'js', 'select-bathroom.js'));
});

//favs
frontendRouter.get('/favorites', (req, res) => {
    res.sendFile(`${html_dir}/templates/favorites.html`);
});
frontendRouter.get('/css/favorites.css', (req, res) => {
    res.sendFile(path.join(html_dir, 'css', '/favorites.css'));
});
frontendRouter.get('/js/favorites.js', (req, res) => {
    res.sendFile(path.join(html_dir, 'js', 'favorites.js'));
});

//profile
frontendRouter.get('/profile', (req, res) => {
    res.sendFile(`${html_dir}/templates/profile.html`);
});
frontendRouter.get('/css/profile.css', (req, res) => {
    res.sendFile(path.join(html_dir, 'css', '/profile.css'));
});
frontendRouter.get('/js/profile.js', (req, res) => {
    res.sendFile(path.join(html_dir, 'js', 'profile.js'));
});

//reviews
frontendRouter.get('/reviews', (req, res) => {
    res.sendFile(`${html_dir}/templates/reviews.html`);
});
frontendRouter.get('/js/add-review.js', (req, res) => {
    res.sendFile(path.join(html_dir, 'js', 'add-review.js'));
});


//offline
frontendRouter.get('/offline', (req, res) => {
    res.sendFile(`${html_dir}/templates/offline.html`);
});
frontendRouter.get('/css/offline.css', (req, res) => {
    res.sendFile(path.join(html_dir, 'css', '/offline.css'));
});

// defaulted JS for all pages
frontendRouter.get('/js/common.js', (req, res) => {
    res.sendFile(path.join(html_dir, 'js', 'common.js'));
});
frontendRouter.get('/js/HTTPClient.js', (req, res) => {
    res.sendFile(path.join(html_dir, 'js', 'HTTPClient.js'));
});
frontendRouter.get('/serviceWorker.js', (req, res) => {
    res.sendFile(path.join(html_dir, 'serviceWorker.js'));
});
frontendRouter.get('/js/serviceWorkerStartUp.js', (req, res) => {
    res.sendFile(path.join(html_dir, 'js', 'serviceWorkerStartUp.js'));
});
frontendRouter.get('/manifest.webmanifest', (req, res) => {
    res.sendFile(path.join(html_dir, 'manifest.webmanifest'));
});
frontendRouter.get('/images/:imageName', (req, res) => {
    res.sendFile(path.join(html_dir, 'images', req.params.imageName));
});
frontendRouter.get('/js/APIClient.js', (req, res) => {
    res.sendFile(path.join(html_dir, 'js', 'APIClient.js'));
});

frontendRouter.get('/css/reviews.css', (req, res) => {
    res.sendFile(path.join(html_dir, 'css', 'reviews.css'));
});

module.exports = frontendRouter;