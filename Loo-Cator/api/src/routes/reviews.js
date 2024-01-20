const express = require('express');
const router = express.Router();
const ReviewDAO = require('../database/ReviewDAO');

const {TokenMiddleware} = require('../middleware/TokenMiddleware');

router.get('/reviews/bathroom/:id', TokenMiddleware, (req, res) => { 
    ReviewDAO.getBathroomReviews(req.params.id).then(reviews => {
        res.json(reviews);
    }).catch(
        err => {
            console.log(err);
            res.status(err.code).json({ error: err.message });
    });
});

router.get('/reviews/user/:id', TokenMiddleware, (req, res) => { 
    ReviewDAO.getUserReviews(req.params.id).then(reviews => {
        res.json(reviews);
    }).catch(err => {
        console.log(err);
        res.status(err.code).json({ error: err.message });
    });
});

router.post('/review', TokenMiddleware, (req, res) => {
    let reviewObject = {
        cleanliness_rtng: req.body.cleanliness_rtng,
        privacy_rtng: req.body.privacy_rtng,
        aesthetic_rtng: req.body.aesthetic_rtng,
        amenities_rtng: req.body.amenities_rtng,
        overall_rtng: req.body.overall_rtng,
        hasChangingTable: req.body.hasChangingTable,
        hasAccessibility: req.body.hasAccessibility,
        comment: req.body.comment
    }
    ReviewDAO.setReview(reviewObject, req.body.bth_id, req.body.usr_id).then(review => {
        res.status(200).json({msg: "review successfully added", rvw: review});
    }).catch(err => {
        console.log(err);
        res.status(err.code).json({ error: err.message });
    });
});

module.exports = router;