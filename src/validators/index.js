const { check } = require('express-validator');

module.exports = {
    solve : [
        check('a').isArray().withMessage("Propriedade 'a' não é um array"),
        check('k').isNumeric().withMessage("Propriedade 'k' não é numérica")
    ]
}