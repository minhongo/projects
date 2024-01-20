import api from './APIClient.js';

const floorsList = document.querySelector('#floors-list');

const urlParams = new URLSearchParams(window.location.search);
const buildingId = urlParams.get('id')



api.getFloors(buildingId).then(floors => {
    let i = 1;
    console.log(" i can search for " + buildingId)
    console.log(floors)
    floors.forEach(floor => {
        let listItem = document.createElement('li');

        listItem.addEventListener('click', () => {
            console.log(`${floor.name} clicked on.`);
        });

        let anchor = document.createElement('a');
        anchor.setAttribute("href", "/bathrooms/" + "?id=" + floor.id);


        //Should be styled more. We should probably do something to show num of bathrooms on floor.
        //Could use api for that or change schema so that each floor knows the number of bathrooms on it.
        console.log(floor.name.substring(0,4));
        if (floor.name.substring(0, 4) == "hunt") {
            anchor.innerHTML = "Hunt Library Floor " + i;
        } else if (floor.name.substring(0, 4) == "tall") {
            anchor.innerHTML = "Talley Student Union Floor " + i;
        } else {
            anchor.innerHTML = floor.name;
        }
        //Previous code

        // puts them on separate lines by div --> styling this might be a bit weird 
        // --> can prob just change or put them on the same line and use CSS to change
        // const nameDiv = document.createElement('div');
        // if (floor.name.includes("talley")) {
        //     nameDiv.textContent = `Talley Floor ${i}`;
        // } else {
        //     nameDiv.textContent = floor.name;
        // }
        // listItem.appendChild(nameDiv);
        // nameDiv.classList.add('floor-name');

        // const bathroomsInfo = document.createElement('div');
        // bathroomsInfo.textContent = `Number of Bathrooms: ${floor.bathrooms.length}`;
        // listItem.appendChild(bathroomsInfo);
        // bathroomsInfo.classList.add('num-bathrooms');

        listItem.appendChild(anchor);
        floorsList.appendChild(listItem);
        i++;
    });
}).catch(error => {
    console.error('Floors not found. Error: ', error);
});