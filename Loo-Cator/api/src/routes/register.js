const express = require('express');
const router = express.Router();
const UserDAO = require('../database/UserDAO');

router.post('/register', (req, res) => {
    const userData = req.body;

    UserDAO.getUserWithUsername(userData.username).then(existingUser => {
        if (existingUser) {
            const message = "User already exists.";
            res.status(500).json({ error: message });
        } else {
            UserDAO.createAccount(userData).then(newlyCreatedAccount => {
                res.json(newlyCreatedAccount);
            });
        }
    }).catch(error => {
        const message = "Error checking existing user or creating a new account.";
        res.status(500).json({ error: message });
    });
});

module.exports = router;