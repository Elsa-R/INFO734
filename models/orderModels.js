var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  numberOrder : Number,
  clientName : String,
  deliveryAddress : String,
  order : String,
  done : {
    type : Boolean,
    default : false
  },
  createdAt : {
    type : Date,
    default : Date.now
  },
});

module.exports = mongoose.model('Order', OrderSchema);
