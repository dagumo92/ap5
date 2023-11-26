
const prompt = require('prompt-sync')({sigint: true});
var numero = parseInt(prompt('Introducir número:'));
var sumaDivisores = 0, divisor = numero - 1;
while(divisor > 0){
    r= numero % divisor;
    if(r == 0){
        sumaDivisores = sumaDivisores + divisor;
        console.log("Divisor sumado: " + divisor);
    }
    divisor= divisor - 1;
}
if(numero == sumaDivisores){
    console.log("El número  es perfecto.");
}else{
    console.log("El número no es perfecto.");
}
