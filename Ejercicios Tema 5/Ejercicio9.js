
function restar(a,b)
{
    return a - b;
}
function sumar(a,b)
{
    return a + b;
}
function multiplicar(a,b)
{
    return a * b;
}
function dividir(a,b)
{
    return a / b;
}
function porcentaje(a,b)
{
    return a % b;
}
const prompt = require('prompt-sync')({sigint: true});

//Introduce la operación
console.log("Introduce la operación a realizar: " + "\n" + "1-Suma" + "\n" + "2-Resta" + "\n" + "3-Multiplicación" + "\n" + "4-División" + "\n" + "5-Porcentaje");
var operacion = parseInt(prompt("Opción: "));

//Introduce los números
var a = prompt('Introduce el primer número: ');
var b = prompt('Introduce el segundo número: ');
var resultado=0;

//Seleccionamos operación
switch(operacion) {
    case 1:
      resultado = sumar(a,b);
      break;
    case 2:
        resultado = restar(a,b);
      break;
    case 3:
        resultado = multiplicar(a,b);
      break;
    case 4:
        resultado = dividir(a,b);
      break;
    case 5:
        resultado = porcentaje(a,b);
      break;
    default:
        console.log("Operación no existente");
        return;
      // code block
  }


console.log('Resultado ' + resultado)
