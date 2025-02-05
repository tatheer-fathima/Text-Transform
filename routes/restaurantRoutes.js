const express = require('express');
const router = express.Router();
const { getRestaurantById, getRestaurants, searchByLocation } = require('c:/Users/tathe/webapp-T-Fathima/backend/controllers/restaurantController');

router.get('/restaurant/:id', getRestaurantById);
router.get('/restaurants', getRestaurants);
router.get('/restaurant/location', searchByLocation);

module.exports = router;
