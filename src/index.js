const express = require('express');
const bodyParser = require('body-parser');

const app = express();


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../src/static/swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./controllers/authController')(app);

app.listen(8178);