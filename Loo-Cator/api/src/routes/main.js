const express = require('express');
const routes = express.Router();

// routes
const favorites = require('./favorites');
routes.use(favorites);

const login = require('./login');
routes.use(login);

const register = require('./register');
routes.use(register);

const campus = require('./campus');
routes.use(campus);

const buildings = require('./buildings');
routes.use(buildings);
// routes.use('/NCState', buildings);

const floors = require('./floors');
routes.use(floors);

const bathrooms = require('./bathrooms');
routes.use(bathrooms);

const reviews = require('./reviews');
routes.use(reviews);

module.exports = routes;