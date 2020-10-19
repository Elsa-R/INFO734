//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/order');

//CREATE
router.post("/order", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/orders", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/order/:id", (req, res) => {
    
    controller.read(req, res);

});

//DELETE
router.delete("/order/:id", (req, res) => {
    
    controller.delete(req, res);

});

module.exports = router;