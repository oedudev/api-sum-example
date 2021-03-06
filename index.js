const express = require('express')
const bodyParser = require('body-parser')
const solveController = require("./src/controllers/solve")
const validator = require("./src/validators")


const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/api/solve', 
    validator.solve,
    solveController.solve
)

app.listen(3000, function () {
    console.log('Listening app on port 3000!');
});