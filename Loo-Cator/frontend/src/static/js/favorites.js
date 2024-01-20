import api from './APIClient.js';

// whenever the page loads, call functions
window.addEventListener('load', function () {
    populateFavoritesList();
});

function populateFavoritesList() {
    api.getFavorites().then(response => {
        console.log("FAVORITES LIST");
        const favoritesList = response.favorites;

        const favoritesUl = document.getElementById('favorites');

        favoritesUl.innerHTML = '';

        // populate the list with favorited bathrooms - name
        favoritesList.forEach(favorite => {
            const li = document.createElement('li');
            console.log("FAVORITE: " + JSON.stringify(favorite));
            li.textContent = favorite.name;
            
            li.addEventListener('click', () => {
                showFavoriteLinkPopup(favorite.floorplan);
            });
            favoritesUl.appendChild(li);
        });
    });
}

function showFavoriteLinkPopup(link) {
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');

    const favoriteImage = document.createElement('img');
    favoriteImage.src = link;
    favoriteImage.alt = 'Add image...';

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerText = 'CLOSE';
    closeButton.addEventListener('click', () => {
        document.body.removeChild(popupContainer);
    });
    // add content to the pop-up
    popupContent.appendChild(favoriteImage);
    popupContent.appendChild(closeButton);
    // append pop-up to container 
    popupContainer.appendChild(popupContent);
    
    document.body.appendChild(popupContainer);
}