require("dotenv").config();
const express = require ("express");
const cors = require("cors");
const path = require("path");
const connectdb = require("./config/db.js");
const authRoutes = require("./routes/authRoutes");
const app = express();

// Middle ware to handle cors
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE" ],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use(express.json());

connectdb();

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));