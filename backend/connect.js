const { MongoClient } = require('mongodb');
require('dotenv').config();

// Connection URI
const uri = process.env.URL_MONGODB  // Replace with your MongoDB connection URI

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to MongoDB
async function connectMongoDB() {
    try {
        
        // Connect to the MongoDB server
        await client.connect();
        console.log('Connected to the database');
        return client;
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
}

module.exports = { connectMongoDB, client }; // Export the function and the client object
