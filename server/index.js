import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
    res.json({ message: "This is LangJo App 🏴󠁧󠁢󠁥󠁮󠁧󠁿!" });
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });