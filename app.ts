import express, { Application } from "express";
import dotenv from "dotenv";

dotenv.config();
const app: Application = express();

app.get("/", (_, res) => {
    res.send("Belajar Express");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
