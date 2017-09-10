const path = require('path');
const BUILD_DIR = path.join(__dirname, '../build');
const PORT = 3000;
const express = require('express');
const app = express();

app.use(express.static(BUILD_DIR));

app.get('/', function(req, res){
    res.sendFile(path.join(BUILD_DIR, 'index.html'));
});

app.listen(PORT);