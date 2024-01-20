const express = require('express');
const router = express.Router();
const BuildingsDAO = require('../database/BuildingsDAO');

const {TokenMiddleware} = require('../middleware/TokenMiddleware');

router.get('/:campusId/buildings', TokenMiddleware, (req, res) => {
    const campusId = req.params.campusId;
    BuildingsDAO.getAllBuildings(campusId).then(buildings => {
        res.json(buildings);
    });
});

// router.get('/buildings/:buildingName', (req, res) => {
//     let building = req.params.buildingName;

//     BuildingsDAO.getBuilding(building).then(b => {
//         res.json(b.floors);
//     }).catch(error => {
//         let message = "Building not found."
//         res.json({ error: message });
//     });
// });

// return all information of _____ building
router.get('/:building/info', TokenMiddleware, (req, res) => {
    let buildingName = req.params.building;

    BuildingsDAO.getBuilding(buildingName).then(building => {
        res.json(building);
    }).catch(error => {
        let message = "/buildings failing."
        res.json({ error: message });
    });
});

// return all the floors of _____ building
router.get('/:building', TokenMiddleware, (req, res) => {
    let buildingName = req.params.building;

    BuildingsDAO.getBuilding(buildingName).then(building => {
        res.json(building.floors);
    }).catch(error => {
        let message = "/buildings failing."
        res.json({ error: message });
    });
});

module.exports = router;