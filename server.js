require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Initialize Express
const app = express();

// Middleware
app.use(express.json()); // To parse JSON

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.error('MongoDB connection failed:', err));

// Routes
//app.use('/api/items', require('./routes/items'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
