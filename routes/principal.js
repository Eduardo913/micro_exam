var express = require('express');
var router = express.Router();
const json = require('../resources/musica.json')

router.get('/principal', function (req, res, next) {
    res.json(json).sendStatus(200);
  
  });
  
module.exports = router;
  