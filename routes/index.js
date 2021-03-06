'use strict';
//=============================================================================
/**
 * dependencies
 */
 //============================================================================
 const
  express = require('express'),
  router = express.Router();
 //============================================================================
 /**
  * routes
  */
  //===========================================================================
  router.get('/', (req, res) => res.status(200).render('pages/index'));

  router.get('/success', (req, res) => res.status(200).render('pages/success'));

  router.get('/sales', (req, res) => res.status(200).render('pages/sales'));
  //===========================================================================
  /**
   * export module
   */
   //==========================================================================
   module.exports = router;
   //==========================================================================
