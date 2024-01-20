import api from './APIClient.js';

const building_list = document.querySelector('#buildings');

//Get the campus id the floors should be attached to from url param
const urlParams = new URLSearchParams(window.location.search);
const campusId = urlParams.get('id')

api.getBuildings(campusId).then(buildings => {
    buildings.forEach( building => {
        console.log(building);
        const li = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.setAttribute("href", "/floors/" + "?id=" + building.id);

        //Change this for styling building 
        anchor.innerHTML = building.name;
        if (building.name == "TalleyStudentUnion") {
            anchor.innerHTML = "Talley Student Union";
        }
        
        li.appendChild(anchor);

        li.addEventListener('click', () => {buildingClick( building )});

        building_list.append(li);
    });
});

function buildingClick( buildingJSON ) {
    console.log("BUILDING NAME: " + buildingJSON.name);
}
