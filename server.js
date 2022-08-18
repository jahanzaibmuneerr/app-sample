require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const appService = require('./app/services/appService');
// create express app
const app = express();

app.use(bodyParser.json({
    limit: '50mb',
    verify: (req, res, buf) => {
        req.rawBody = buf;
      },
   })
);

app.use(cors());

require('./bootstrapApplication').bootstrap(app);

// listen for requests
var port = helper.env('PORT', 3000);
app.listen(port, () => {
    console.log(`--- Hi! Server is listening on port ${port} ---`);
});