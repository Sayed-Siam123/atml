var createError = require('http-errors');
const dotEnv = require('dotenv');
var express = require('express');

var projectJson = require('./package.json');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors')
var app = express();

//Getting router file
var authenticationRouter = require('./routes/authentication/authentication.router');
var productsRouter = require('./routes/Products/products.routes');
var evaluationRouter = require('./routes/form_evaluation/formEvaluation.router');

dotEnv.config();
app.use(cors()) //for cors use
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node JS project for ATML',
      version: projectJson.version,
    },
    servers : [
      {
        url : "http://127.0.0.1:3000"
      },
      {
        url : "http://192.168.0.1:3000"
      }
    ],
  },
  apis: ['./app.js','./routes/Products/products.routes.js'], // files containing annotations as above
};

// setting end point for particular routes
const swaggerSpecs = swaggerJSDoc(swaggerOptions);
app.use('/api/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use('/api/v1/authentication', authenticationRouter);
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/evaluation', evaluationRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;