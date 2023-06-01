import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
    res.json({ message: "This is LangJo App 🏴󠁧󠁢󠁥󠁮󠁧󠁿!" });
})

// handle undefined routes

app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
  });

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });