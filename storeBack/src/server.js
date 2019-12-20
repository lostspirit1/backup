const express = require('express');
const passport = require('passport');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const localConfig = require('./config/local.json');

const serveIndex = require('serve-index');
require('./database/index');
const routes = require('./routes');
const app = express();

const port = process.env.PORT || localConfig.port;
const server = app.listen(
    port,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
  );
  require('./auth/passIndex')(passport);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);
