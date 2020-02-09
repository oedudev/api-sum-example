module.exports = {
    solve : function(numberList, resultDesired) {

        /* 
            Para verificar se a soma dos itens corresponde ao resultado desejado, fazemos o seguinte:
            - Para cada posição do array, pegamos o número e fazemos a soma com todos os números adiante
            - Ao Obter o resultado, retorna true
            - Ao final do loop, retorna false (pois não encontrou)
        */
        for (let firstIdx = 0; firstIdx < numberList.length -1; firstIdx++) {
            for(let secondIdx=firstIdx+1; secondIdx < numberList.length; secondIdx++ ) {

                const firstNumber = numberList[firstIdx];
                const secondNumber = numberList[secondIdx]
                const currentResult = firstNumber + secondNumber
                
                if (currentResult == resultDesired) {
                    return true
                }
            }
        }

        return false
    }
}