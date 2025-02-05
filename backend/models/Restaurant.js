const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    //restaurant_id: { type: Number, unique: true },
    name: String,
    country_code: Number,
    city: String,
    address: String,
    locality: String,
    longitude: Number,
    latitude: Number,
    cuisines: String,
    average_cost: Number,
    currency: String,
    has_table_booking: String,
    has_online_delivery: String,
    is_delivering_now: String,
    price_range: Number,
    aggregate_rating: Number,
    rating_text: String,
    votes: Number,
}, {
    timestamps: true,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;


/*const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: String,
    cuisine: String,
    location: {
        type: { type: String, enum: ['Point'], required: true },
        coordinates: { type: [Number], required: true },
    },
});

restaurantSchema.index({ location: '2dsphere' });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;*/
/*const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cuisine: { type: String, required: true },
  address: { type: String, required: true }, // Add this field for display
  contact: { type: String }, // Optional contact number
  rating: { type: Number, default: 0 }, // Optional rating

  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
      default: "Point",
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

// Ensure location is indexed for geospatial queries
restaurantSchema.index({ location: "2dsphere" });

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;

*/