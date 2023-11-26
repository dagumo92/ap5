function esPrimo(numero) {
    if (numero <= 1) {
        console.log("El número no es primo, es menor que 1");
        return false;
    }
    for (let i = 2; i< numero; i++) {
        
        if (numero % i === 0) {
            console.log ("Hemos encontrado el divisor: " + i);
            return false;
        }  
    }
    console.log ("No hemos encontrado divisor");
    return true;
}

const prompt = require('prompt-sync')({sigint: true});
var numero = parseInt(prompt('Introducir número:'));
var resultado = esPrimo(numero)
console.log (resultado);
