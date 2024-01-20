const db = require('./DBConnection');
const Review = require('./info/Review');

function getUserReviews(id) {
    return db.query(
        'SELECT * FROM review r JOIN bathroom_review_user bru ON r.rvw_id = bru.bru_rvw_id WHERE bru.bru_usr_id=?', 
        [id]
    ).then(({results}) => {
        return results.map(review => new Review(review)); ;
    });
}

function getBathroomReviews(id) {
    return db.query(
        `SELECT * FROM review r JOIN bathroom_review_user bru ON r.rvw_id = bru.bru_rvw_id WHERE bru.bru_bth_id=?`,
        [id]
    ).then(({results}) => {
        return results.map(review => new Review(review)); ;
    });
}

function setReview(rO, bth_id, usr_id){
    return db.query(
        'INSERT INTO review (rvw_cleanliness_rtng, rvw_privacy_rtng, rvw_aesthetic_rtng, rvw_amenities_rtng, rvw_overall_rtng, rvw_hasChangingTable, rvw_hasAccessibility, rvw_comment ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [rO.cleanliness_rtng, rO.privacy_rtng, rO.aesthetic_rtng, rO.amenities_rtng, rO.overall_rtng, rO.hasChangingTable, rO.hasAccessibility, rO.comment]
    ).then(({ results }) => {
        db.query('INSERT INTO bathroom_review_user (bru_bth_id, bru_rvw_id, bru_usr_id) VALUES (?, ?, ?)', [bth_id, results.insertId, usr_id]);
        return results;
    }).catch(err => {
        throw new Error("Invalid Review: "+ err);
    });
}

module.exports = {
    getUserReviews: getUserReviews,
    getBathroomReviews: getBathroomReviews,
    setReview: setReview,
};