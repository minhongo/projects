const express = require('express');
const router = express.Router();
const CampusDAO = require('../database/CampusDAO');

const {TokenMiddleware} = require('../middleware/TokenMiddleware');

router.get('/campuses', TokenMiddleware, (req, res) => { 
    CampusDAO.getAllCampuses().then(campuses => {
        res.json(campuses);
    });
});

module.exports = router;