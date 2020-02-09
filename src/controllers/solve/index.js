const solveService = require("../../service/solve")

module.exports = {
    solve : async function(req, res) {
        const { a, k } = req.body

        
        
        res.json({
            status: "OK",
            a,
            k,
            solve: solveService.solve(a,k)
        })
    }
}