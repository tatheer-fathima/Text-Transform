// const csv = require('csvtojson');
// const Restaurant = require('../models/Restaurant');
// const connectDB = require('../config/db');
// require('dotenv').config();

// connectDB();

// const loadData = async () => {
//     try { 
//         const csvFilePath = 'data/zomato.csv';  // Path to your CSV file
//         const restaurants = await csv().fromFile(csvFilePath);
//         // Remove _id field from the data
//         restaurants = restaurant.map(restaurant => {
//             delete restaurant._id;
//             return restaurant;
//         })
//         // Insert into MongoDB
//         await Restaurant.insertMany(restaurants);
//         console.log('Data Loaded Successfully!');
//     } catch (error) {
//         console.error('Error loading data:', error.message);
//     } finally {
//         process.exit();
//     }
// };

// loadData();
const csv = require('csvtojson');
const mongoose = require('mongoose');
const Restaurant = require('../models/Restaurant');
const connectDB = require('c:/Users/tathe/webapp-T-Fathima/backend/config/db');
require('dotenv').config();

connectDB();

const loadData = async () => {
    try { 
        const csvFilePath = 'data/zomato.csv';  // Path to your CSV file
        let restaurants = await csv().fromFile(csvFilePath);

        // Remove `_id` field if present in CSV
        restaurants = restaurants.map(restaurant => {
            delete restaurant._id;  // Ensures MongoDB generates a valid ObjectId
            return restaurant;
        });

        // Insert into MongoDB
        await Restaurant.insertMany(restaurants);
        console.log('✅ Data Loaded Successfully!');
        process.exit();
    } catch (error) {
        console.error('❌ Error loading data:', error.message);
        process.exit(1);
    }
};

loadData();
