const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('will send all the dishes');
    })
    .post((req, res, next) => {
        res.end('will add dish  ' + req.body.name + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('will add dish  put operation');
    })
    .delete((req, res, next) => {
        res.end('will delete all the dishes');
    })
    .delete((req , res , next) => {
        res.end('will delete the dish with id ' , req.params.dishId);
    });


module.exports = dishRouter;

