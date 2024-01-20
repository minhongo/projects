const db = require('./DBConnection');
const Campus = require('./info/Campus');

module.exports = {
    getAllCampuses: () => {
        return db.query('SELECT * FROM campus').then(({results}) => {
            return results.map(campus => new Campus(campus));
        });
    }, 
};