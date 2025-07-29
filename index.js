const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use("/api/user", userRoutes);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('✅ MongoDB connected successfully');
        app.listen(port, () => {
            console.log(`🚀 Server listening on http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error('❌ MongoDB connection failed:', error.message);
    });
