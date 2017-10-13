const express = require('express');

const app = express();


console.log("server is still running...");

app.listen(3000);

app.use(express.static('public'));
