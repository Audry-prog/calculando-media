const input = require("readline-sync")

console.log("==== Olá, Seja Bem-Vinda à sua Calculadora de Média ====")

let input1 = input.question ("Informe o valor da primeira nota: ")

if (isNaN(input1)) {
    input1 = input.question ("O valor digitado nao e um numero. Por favor, digite um numero para a nota 1: ")
    if (isNaN(input1)) {
        input1 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 1: ")  
        if (isNaN(input1)) {
        input1 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 1: ")
        if (isNaN(input1)) {
            input1 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 1: ")
        }
    }
}
}


let input2 = input.question ("Informe o valor da segunda nota: ")
 if (isNaN(input2)) {
    input2 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 2: ")
    if (isNaN(input2)) {
        input2 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 2: ")
        if (isNaN(input2)) {
        input2 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 2: ")
        if (isNaN(input2)) {
            input2 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 2: ")
        }
    }
}
}

let input3 = input.question ("Informe o valor da terceira nota: ")
if (isNaN(input3)) {
    input3 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 3: ")
    if (isNaN(input3)) {
        input3 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 3: ")
        if (isNaN(input3)) {
        input3 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 3: ")
            if (isNaN(input3)) {
            input3 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 3: ")
        }
    }
}
}

let input4 = input.question ("Informe o valor da quarta nota: ")
if (isNaN(input4)) {
    input4 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 4: ")
    if (isNaN(input4)) {
        input4 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 4: ")
    if (isNaN(input4)) {
        input4 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 4: ")
        if (isNaN(input4)) {
            input4 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 4: ")
        }
    }
}
}


let input5 = input.question ("Informe o valor da quinta nota: ")
if (isNaN(input5)) {
    input5 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 5: ")
    if (isNaN(input5)) {
        input5 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 5: ")
    if (isNaN(input5)) {
        input5 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 5: ")
        if (isNaN(input5)) {
            input5 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 5: ")
        }
    }
}
}

let input6 = input.question ("Informe o valor da sexta nota: ")
if (isNaN(input6)) {
    input6 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 6: ")
    if (isNaN(input6)) {
        input6 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 6: ")
    if (isNaN(input6)) {
        input6 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 6: ")
        if (isNaN(input6)) {
            input6 = input.question("O valor digitado nao e um numero. Por favor, digite um numero para a nota 6: ")
        }
    }
}
}

const media = (parseFloat(input1) + parseFloat(input2) + parseFloat(input3) + parseFloat(input4) + parseFloat(input5) + parseFloat(input6)) / 6
console.log("Sua média foi: " + media.toFixed(2))

if (media >= 7){
    console.log ("Parabéns, você foi Aprovada!")
} else if (media < 5){
    console.log ("Lamento, mas você foi Reprovada!")
} else {
    console.log ("Você está em Recuperação. Nos vemos na prova final!")
}
