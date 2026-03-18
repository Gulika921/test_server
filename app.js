import express from "express";

const app = express();
const URL = "100.86.121.25";
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Raspberry Pi 🚀");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on ${URL}:${PORT}`);
});
