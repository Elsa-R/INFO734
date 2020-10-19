var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PizzaSchema = new Schema({
  numberPizza : Number,
  pizzaName : String,
  description : String,
  done : {
    type : Boolean,
    default : false
  },
  createdAt : {
    type : Date,
    default : Date.now
  },
});

module.exports = mongoose.model('Pizza', PizzaSchema);
