var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DataShcema = new Schema({
  angka1: {
    type: String,
    required: true
  },
  angka2: {
    type: String,
    required: true
  },
  operator: {
    type: String,
    require: true
  },
  hasil: {
    type: String,
    required: true
  }
});

var Data = mongoose.model('Data', DataShcema);

module.exports = Data;
