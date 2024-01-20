const db = require('./DBConnection');
const Floor = require('./info/Floor');

module.exports = {
    // getFloor: (name) => {
    //     return new Promise((resolve, reject) => {
    //         let floor = floorsJSON.find(floor => floor.name == name);
    //         if (floor) resolve(floor);
    //         else reject('Floor does not exist.')
    //     });
    // },

    getFloorsByOwner: (bld_id) => {
        return db.query('SELECT * FROM floor JOIN floor_building ON fb_flr_id=flr_id WHERE fb_bld_id=?', [bld_id]).then(({results}) => {
            return results.map(floor => new Floor(floor)); ;
        });
    },

    // getFloorsByOwner: (owner) => {
    //     return new Promise((resolve, reject) => {
    //         const matchingFloors = floorsJSON.filter(floor => floor.owner === owner);
    //         if (matchingFloors.length > 0) {
    //             resolve(matchingFloors);
    //         } else {
    //             reject('No floors found for the specified owner.');
    //         }
    //     });
    // },
};
