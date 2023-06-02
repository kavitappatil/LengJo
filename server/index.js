import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { router } from "./routes/users.js"

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
// MongoDb connection
const connect = () => {
    mongoose.connect(process.env.MONGO_DB)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => {throw error});
}

app.get('/', (req, res) => {
    res.json({ message: "This is LangJo App 🏴󠁧󠁢󠁥󠁮󠁧󠁿!" });
})

app.use("/api/users", router)
// handle undefined routes
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
  });


app.listen(PORT, () => {
    connect()
    console.log(`Listening on port ${PORT}`);
  });
  