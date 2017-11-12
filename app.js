'use strict';
//============================================================================
/**
 * dependencies
 */
 //============================================================================
 const
  express = require('express'),
  http = require('http'),
  ejsLayouts = require('express-ejs-layouts'),
  path = require('path');
//=============================================================================
/**
 * variables
 */
 //============================================================================
 const
  PORT = process.env.PORT || 3030,
  ENV = process.env.NODE_ENV || 'development';
//===========================================================================
/**
 * config
 */
 //==========================================================================
 const app = express();

 app.disable('x-powered-by');
 app.set('port', PORT);
 app.set('env', ENV);
 app.set('views', path.join(__dirname, '/views'));
 app.engine('html', require('ejs').renderFile);
 app.set('view engine', 'html');
 app.set('layout', 'layout');

 if(ENV != 'production') {
     app.use(require('morgan')('dev'));
     require('clarify');
 }

 const server = http.createServer(app);
 //============================================================================
 /**
  * routes
  */
  //===========================================================================
  app.get('/test', (req, res) => res.status(200).json('OK!'));

  const routes = require('./routes');

  app.use('/', routes);
  //===========================================================================
  /**
   * listen
   */
   //==========================================================================
   server.listen(PORT, () => console.log(`MAUTIC Server up on port:${server.address().port} in ${ENV} mode`));
   //==========================================================================
