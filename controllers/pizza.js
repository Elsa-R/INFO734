function createPizza(req, res) {
    console.log(req.body);
    let Pizza = require('../models/pizzaModels');
    let newPizza = Pizza ({
        numberPizza: req.body.number,
        pizzaName : req.body.pizzaName,
    });
    newPizza.save()

    .then((savedPizza) => {
        //send back the created Pizza
        res.json(savedPizza);
            
    }, (err) => {
        res.status(400).json(err)
    });
}

function readPizzas(req, res) {

    let Pizza = require("../models/pizzaModels");

    Pizza.find({})
    .then((pizzas) => {
        res.status(200).json(pizzas);
    }, (err) => {
        res.status(500).json(err);
    });
}

function readPizza(req, res) {

    let Pizza = require("../models/pizzaModels");

    Pizza.findById({_id : req.params.id})
    .then((pizza) => {
        res.status(200).json(pizza);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deletePizza(req, res) {

    let Pizza = require("../models/pizzaModels");

    Pizza.findOneAndRemove({_id : req.params.id})
    .then((deletedPizza) => {
        res.status(200).json(deletedPizza);
    }, (err) => {
        res.status(500).json(err);
    });
}

module.exports.create = createPizza;
module.exports.reads = readPizzas;
module.exports.read = readPizza;
module.exports.delete = deletePizza;