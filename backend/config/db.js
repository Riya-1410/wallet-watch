const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log("MongoDB connected successfully");
    }catch (err) {
        console.error("MongoDB connection failed", err);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectdb;