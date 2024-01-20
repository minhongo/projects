import api from './APIClient.js';

const bathroomList = document.querySelector('.bathroom-list');
const urlParams = new URLSearchParams(window.location.search);
const floorId = urlParams.get('id');

// when page loads --> populate page with bathrooms and other functionalites
window.addEventListener('load', start);

function start() {
  api.getBathrooms(floorId).then(bathrooms => {
    console.log(bathrooms);

    getCurrentUserId().then(userId => {
      bathrooms.forEach(bathroom => {
        const listItem = createBathroomListItem(bathroom, userId);
        bathroomList.appendChild(listItem);
      });
    });
  }).catch(error => {
    console.error('Bathrooms not found. Error: ', error);
  });
}

function createBathroomListItem(bathroom, userId) {
  const listItem = document.createElement('li');
  listItem.setAttribute("class", "bathroom");
  listItem.innerHTML = generateBathroomHTML(bathroom);

  generateReviews(listItem, bathroom);

  const heartIcon = listItem.querySelector('.heart');

  api.getFavorites().then(response => {
    const favoritesList = response.favorites;

    let isFavorited = favoritesList.some(favorite => {
      // console.log("FAVORITE ID: " + favorite.id);
      return favorite.id === bathroom.id;
    });
    heartIcon.innerHTML = isFavorited ? '<i class="bx bxs-heart"></i>' : '<i class="bx bx-heart"></i>';

    heartIcon.addEventListener('click', () => {
      if (isFavorited) {
        // if bathroom is favorited, unfavorite it
        api.unfavoriteBathroom(userId, bathroom.id).then(() => {
          console.log("Bathroom Unfavorited");
          // update heart icon to non-shaded heart
          heartIcon.innerHTML = '<i class="bx bx-heart"></i>';
          isFavorited = false;
        }).catch(error => {
          console.error("Error unfavoriting bathroom:", error);
        });
      } else {
        // if bathroom is not favorited, favorite it
        api.favoriteBathroom(userId, bathroom.id).then(() => {
          console.log("Bathroom Favorited");
          heartIcon.innerHTML = '<i class="bx bxs-heart"></i>';
          isFavorited = true;
        }).catch(error => {
          console.error("Error favoriting bathroom:", error);
        });
      }
    });
  });

  return listItem;
}

//Handles html elements for rating/navigating to view review/ navigate to add review
function generateReviews(listItem, bathroom) {
  // Rating 
  const rating = document.createElement('h3');
  let avgRating = bathroom.sumReviews / bathroom.numReviews;
  if (isNaN(avgRating)){
    avgRating = "No reviews yet";
  } else {
    avgRating += "/5";
  }

  rating.innerText = `Rating: ${avgRating}`;
  rating.setAttribute("class", "bathroom-avg-rating");
  listItem.appendChild(rating)

  // Reviews Button
  let anchor = document.createElement('a');
  anchor.setAttribute("href", "/reviews/" + "?id=" + bathroom.id);
  anchor.innerHTML = "Reviews";
  listItem.appendChild(anchor);
}

function showBathroomLinkPopup(link) {
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');

  const popupContent = document.createElement('div');
  popupContent.classList.add('popup-content');

  const bathroomImage = document.createElement('img');
  bathroomImage.src = link;
  bathroomImage.alt = 'Bathroom Image';

  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  closeButton.innerText = 'Close';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(popupContainer);
  });

  popupContent.appendChild(bathroomImage);
  popupContent.appendChild(closeButton);
  popupContainer.appendChild(popupContent);
  document.body.appendChild(popupContainer);
}

document.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('view-button')) {
    const bathroomLink = target.getAttribute('data-bathroom-link');
    // console.log("BATHROOM LINK: " + bathroom.floorplan);
    showBathroomLinkPopup(bathroomLink);
  }
});

const generateBathroomHTML = (bathroom) =>
  `
  <div class="row">
    <h1>${bathroom.name}</h1>
    <h2><i class="heart"></i></button></h2>
  </div>
  <h3><button class="view-button" data-bathroom-link="${bathroom.floorplan}">View</button></h3>
  `;

function getCurrentUserId() {
  return api.getCurrentUser().then(user => user.id);
};