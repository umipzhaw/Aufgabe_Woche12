'use strict';
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello FS2024 DevOps Course_Philipp_Umiker_änderung_Build und Deploy verbunden_automatische! :-))))');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);