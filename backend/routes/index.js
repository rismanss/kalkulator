var express = require('express');
var router = express.Router();
var Data = require('./../models/data');

router.get('/', function(req, res, next) {
  Data.find({ Data }).then(Data => {
    res.send({ Data });
  });
});

router.post('/', (req, res) => {
  var data = new Data({
    angka1: req.body.angka1,
    angka2: req.body.angka2,
    operator: req.body.operator,
    hasil: req.body.hasil
  });
  data.save().then(result => {
    res.send(result);
  });
});
module.exports = router;
