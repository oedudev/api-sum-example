const express = require('express')
const bodyParser = require('body-parser')
const solveController = require("./src/controllers/solve")
const { check, validationResult } = require('express-validator');


const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/api/solve', [
    check('a').isArray().withMessage("Propriedade 'a' não é um array"),
    check('k').isNumeric().withMessage("Propriedade 'k' não é numérica")
],solveController.solve)

app.listen(3000, function () {
    console.log('Listening app on port 3000!');
});