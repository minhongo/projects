const express = require('express');
const router = express.Router();
const BathroomsDAO = require('../database/BathroomsDAO');

const {TokenMiddleware} = require('../middleware/TokenMiddleware');

router.get('/:floorId/bathrooms', TokenMiddleware, (req, res) => {
    const floorId = req.params.floorId;
    BathroomsDAO.getBathroomsByOwner(floorId).then(floorBathrooms => {
        if (floorBathrooms.length === 0) {
            let message = "No bathrooms found for the specified floor.";
            res.json({ error: message });
        } else {
            res.json(floorBathrooms); 
        }}).catch(error => {
            res.status(500).json({ error: "An error occurred at /:floor/bathrooms." });
    });
});

// router.get('/:building/:floor/:bathroom', (req, res) => {
//     let name = req.params.bathroom;

//     BathroomsDAO.getBathroomOverview(name).then(overview => {
//         res.json(overview);
//     }).catch(error => {
//         let message = "Bathroom not found."
//         res.json({ error: message });
//     });
// });

module.exports = router;