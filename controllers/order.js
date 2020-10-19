function createOrder(req, res) {
    let Order = require('../models/orderModel');
    let newOrder = Order ({
        numberOrder: req.body.number,
        clientName : req.body.clientName,
        order : req.body.order,
        deliveryAddress : req.body.deliveryAddress
    });
  
    newOrder.save()
    .then((savedOrder) => {

        //send back the created Order
        res.json(savedOrder);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readOrders(req, res) {

    let Order = require("../models/orderModel");

    Order.find({})
    .then((orders) => {
        res.status(200).json(orders);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readOrder(req, res) {

    let Order = require("../models/orderModel");

    Order.findById({_id : req.params.id})
    .then((order) => {
        res.status(200).json(order);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function deleteOrder(req, res) {

    let Order = require("../models/orderModel");

    Order.findOneAndRemove({_id : req.params.id})
    .then((deletedOrder) => {
        res.status(200).json(deletedOrder);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createOrder;
module.exports.reads = readOrders;
module.exports.read = readOrder;
module.exports.delete = deleteOrder;
