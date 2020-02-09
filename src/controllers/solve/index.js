const solveService = require("../../service/solve")
const { check, validationResult } = require('express-validator');

module.exports = {
    solve : function(req, res) {
        console.log("solve")

        const errors = validationResult(req);
        console.log("errors", errors)
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }

        const { a, k } = req.body
        const resolution = solveService.solve(a,k)

        res.json({
            resolution
        })
    }
}