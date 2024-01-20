const express = require('express');
const router = express.Router();
const FloorsDAO = require('../database/FloorsDAO');

const {TokenMiddleware} = require('../middleware/TokenMiddleware');

// router.get('/:building/floors', (req, res) => {
//     FloorsDAO.getAllFloors().then(floor => {
//         res.json(floor);
//     }).catch(error => {
//         let message = "/floors not found."
//         res.json({ error: message });
//     });
// });

// return floor information about _____ building
router.get('/:building/floors', TokenMiddleware, (req, res) => {
    const buildingId = req.params.building;

    FloorsDAO.getFloorsByOwner(buildingId).then(buildingFloors => {
        if (buildingFloors.length === 0) {
            let message = "No floors found for the specified building.";
            res.json({ error: message });
        } else {
            res.json(buildingFloors); 
        }}).catch(error => {
            res.status(500).json({ error: "An error occurred at /:building/floors." });
    });
});

// router.get('/:building/:floor', (req, res) => {
//     let floorLevel = req.params.floor;

//     FloorsDAO.getFloor(floorLevel).then(floor => {
//         res.json(floor.bathrooms);
//     }).catch(error => {
//         let message = "Floor not found."
//         res.json({ error: message });
//     });
// });


module.exports = router;