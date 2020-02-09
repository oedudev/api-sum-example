const { check, body } = require('express-validator');

module.exports = {
    solve : [
        // check('a').isArray().withMessage("Propriedade 'a' não é um array"),
        check('k').isNumeric().withMessage("Propriedade 'k' não é numérica"),
        body("a").custom((value, { req }) => {
            const numberList = req.body.a

            if(!Array.isArray(numberList)) {
                throw new Error("Propriedade 'a' não é um array")
            }

            if (!numberList || numberList.length == 0) {
                throw new Error("Propriedade 'a' veio vazia")
            }

            for (let idx = 0; idx < numberList.length; idx++) {
                const element = numberList[idx];

                if(!Number.isInteger(element)) {
                    throw new Error(`Propriedade 'a' tem um elemento de valor '${element}' que não é um número inteiro`)
                }
                
            }
            
        })
    ]
}