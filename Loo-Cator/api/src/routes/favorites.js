const express = require('express');
const router = express.Router();
const FavoritesDAO = require('../database/FavoritesDAO');
const UserDAO = require('../database/UserDAO');

const {TokenMiddleware} = require('../middleware/TokenMiddleware');

router.get('/favorites/all', TokenMiddleware, (req, res) => {
    const userObj = req.user;
    // console.log("get favorites USER: " + JSON.stringify(userObj));

    FavoritesDAO.getAllFavorited(userObj.id).then(favoritesList => {
            res.json({ favorites: favoritesList });
        }).catch(error => {
            console.error(error);
            res.status(500).json({ error: 'cant get favorites' });
        });
});

router.post('/favorites/add/user', TokenMiddleware, (req, res) => {
    const favorited = req.body;
    // console.log("favorited: " + JSON.stringify(favorited));
    FavoritesDAO.favoriteBathroom(favorited).then(fav => {
        res.json({ NewFavorite: fav });
    }).catch(error => {
        console.error(error);
        res.status(500).json({ error: 'cant update favorite' });
    });
});

router.put('/favorites/delete/user', TokenMiddleware, (req, res) => {
    const unfavorited = req.body;
    console.log("unfavorited: " + JSON.stringify(unfavorited));
    FavoritesDAO.unfavoriteBathroom(unfavorited).then((result) => {
        if (result.success) 
          res.json({ message: result.message });
      }).catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'cant delete favorite' });
      });
  });

module.exports = router;