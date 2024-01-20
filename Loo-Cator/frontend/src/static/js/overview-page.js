import api from './APIClient.js';

const overviewsList = document.querySelector('#overviews-list');

const currentURL = window.location.pathname;
const pathParts = currentURL.split('/');

const buildingName = pathParts[1];
const floorName = pathParts[2];
const bathroomName = pathParts[3];

api.getOverviewOfBathroom(buildingName, floorName, bathroomName).then(overview => {
    const bathroom = overview[0];

    for (const key in bathroom) {
        if (key !== 'id') {
            const listItem = document.createElement('li');
            listItem.textContent = `${key}: ${bathroom[key]}`;
            overviewsList.appendChild(listItem);
        }
    }
}).catch(error => {
    console.error('Bathrooms not found. Error: ', error);
});
