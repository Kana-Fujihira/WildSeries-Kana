require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3310;

// Route GET /
app.get('/', (req, res) => {
    res.send('Welcome to Wild Series!');
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});