// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


const port = 8080;
app.listen(port, listening);

function listening () {
    console.log('#################################');
    console.log('##                             ##');
    console.log('##      Server running!!!      ##');
    console.log(`## App listening on port ${port}: ##`);
    console.log('##                             ##');
    console.log('#################################');

};