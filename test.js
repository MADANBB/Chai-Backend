import express from "express";
const app = express();
app.get("/", (req, res) => res.send("OK"));

app.listen(8000, () => console.log("Test server OK on 8000"));
