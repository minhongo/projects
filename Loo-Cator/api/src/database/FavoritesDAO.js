const db = require('./DBConnection');
const Favorites = require('./info/Favorites');
const Bathrooms = require('./info/Bathroom');

module.exports = {
    getAllFavorited: (userId) => {
        return db.query(
            'SELECT bathroom.* FROM favorites JOIN bathroom ON favorites.bth_id = bathroom.bth_id WHERE favorites.usr_id=?', [userId]
        ).then(({ results }) => {
            return results.map(bathroom => new Bathrooms(bathroom));
        }).catch((error) => {
            throw error;
        });
    },

    favoriteBathroom: (data) => {
        // console.log("DAO: " + JSON.stringify(data));
        return db.query('INSERT INTO favorites (usr_id, bth_id) VALUES (?, ?)',
            [data.userId, data.bathroomId]).then((result) => {
                return result;
            });
    },

    unfavoriteBathroom: (data) => {
        console.log("UNFAVORITE DAO: " + JSON.stringify(data));
        return db.query('DELETE FROM favorites WHERE usr_id=? AND bth_id=?', [data.userId, data.bathroomId]).then((result) => {
            if (result.affectedRows > 0) {
                return { success: true, message: 'Bathroom successfully unfavored.' };
            } else {
                return { success: false, message: 'Bathroom not found in favorites.' };
            }
        }).catch((error) => {
            console.error('Error unfavoriting bathroom:', error);
            throw error;
        });
    },
};