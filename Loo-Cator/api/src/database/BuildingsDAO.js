const db = require('./DBConnection');
const Building = require('./info/Building');

module.exports = {
    getBuilding: (name) => {
        return new Promise((resolve, reject) => {
            let building = buildingsJSON.find(building => building.name == name);
            if (building) resolve(building);
            else reject('Building does not exist.')
        });
    }, 

    getAllBuildings: (cmp_id) => {
        return db.query('SELECT * FROM building JOIN building_campus ON bc_bld_id=bld_id WHERE bc_cmp_id=?', [cmp_id]).then(({results}) => {
            return results.map(building => new Building(building)); ;
        });
    } 
};