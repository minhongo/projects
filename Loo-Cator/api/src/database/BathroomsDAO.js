const db = require('./DBConnection');
const Bathrooms = require('./info/Bathroom');

module.exports = {
    getBathroomsByOwner: (flr_id) => {
        return db.query('SELECT * FROM bathroom JOIN bathroom_floor ON bf_bth_id=bth_id WHERE bf_flr_id=?', [flr_id]).then(({results}) => {
            return results.map(bathroom => new Bathrooms(bathroom)); ;
        });
    },
    // getBathroomOverview: (name) => {
    //     return new Promise((resolve, reject) => {
    //         let bathroom = bathroomsJSON.find(bathroom => bathroom.name == name);
    //         if (bathroom) resolve(bathroom);
    //         else reject('Bathroom does not exist.')
    //     });
    // }, 
};