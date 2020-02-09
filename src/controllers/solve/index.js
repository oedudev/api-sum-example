const solveService = require("../../service/solve")

module.exports = {
    solve : async function(req, res) {
        const { a, k } = req.body
        const resolution = solveService.solve(a,k)
        
        res.json({
            status: "OK",
            a,
            k,
            resolution
        })
    }
}