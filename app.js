const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Serve the homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});
app.get("/skills", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "skill.html"));
});
