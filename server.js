const express = require('express');

const app = express();


console.log("server is gestart...");

app.listen(3000);

app.use(express.static('public'));
