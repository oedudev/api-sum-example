const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/api/solve', function(req, res) {
    res.json({
        status: "OK"
    })
})

app.listen(3000, function () {
    console.log('Listening app on port 3000!');
});