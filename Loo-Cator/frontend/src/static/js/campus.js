import api from './APIClient.js';

let campusList = document.querySelector('#campus-list');

api.getCampuses().then((campuses) => {
    populateCampusList(campuses);
}).catch((error) => {
    console.error('Campus not found. Error: ', error);
});

function populateCampusList(campuses) {
    campuses.forEach((campus) => {
        let listItem = createCampusListItem(campus);
        campusList.appendChild(listItem);
    });

    if(campuses.length < 3) {
        for (let i = 0; i < 2; i++) {
            let listItem = createFiller();
            campusList.appendChild(listItem);
        }
    }
}

function createCampusListItem(campus) {
    let listItem = document.createElement('li');

    let anchor = document.createElement('a'); //Anchor tag
    anchor.setAttribute("href", "/buildings/" + "?id=" + campus.id); //Anchor navs to buildings page with url param id=cmp_id

    //Construct Campus html and add it to anchor innerHTML
    anchor.innerHTML = `
    <div class="campus d-flex flex-column  justify-content-between align-items-center">
        <h3 class="campus-name text-center">${campus.name}</h3>
        <p class="text-center">${campus.city}, ${campus.state}</p>
    </div>
    `;

    //Append anchor to listItem
    listItem.appendChild(anchor);
    return listItem;
}

function createFiller() {
    let listItem = document.createElement('li');
    listItem.innerHTML = `
    <h3>More Loos Headed To You Soon!</h3>`;
    listItem.classList.add('filler');

    return listItem;
}