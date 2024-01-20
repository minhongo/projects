const express = require('express');
const router = express.Router();
const UserDAO = require('../database/UserDAO');

const {TokenMiddleware, generateToken, removeToken} = require('../middleware/TokenMiddleware');


router.get('/', TokenMiddleware, (req, res) => {
    res.json({ your_api: 'it works' });
});

router.post('/login', (req, res) => {
    if (req.body.username && req.body.password) {
        UserDAO.getUserByCredentials(req.body.username, req.body.password).then(user => {
            let result = {
                user: user
            }

            generateToken(req, res, user);

            res.json(result);
        }).catch(err => {
            console.log(err);
            res.status(err.code).json({ error: err.message });
        });
    } else {
        res.status(401).json({ error: 'Not authenticated user.' });
    }
});

router.post('/logout', (req, res) => {
    removeToken(req, res);

    res.json({ success: true });
});

router.get('/users/current', TokenMiddleware, (req, res) => {
    // console.log(req.user);
    res.json(req.user);
});

module.exports = router;