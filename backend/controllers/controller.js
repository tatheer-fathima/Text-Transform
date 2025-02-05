const Restaurant = require("../models/Restaurant");

// Get Restaurant by ID
const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get list of Restaurants with pagination (Fix: Ensure API returns an array)
const getRestaurants = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const restaurants = await Restaurant.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json(restaurants); // ✅ Return only an array instead of an object
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search Restaurants by Location
const searchByLocation = async (req, res) => {
  const { lat, lon, radius = 5 } = req.query;

  try {
    const restaurants = await Restaurant.find({
      location: {
        $geoWithin: {
          $centerSphere: [[parseFloat(lon), parseFloat(lat)], radius / 6378.1], // Convert km to radians
        },
      },
    }).select("name address cuisine contact rating");

    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getRestaurantById, getRestaurants, searchByLocation };
