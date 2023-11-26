function convertirCelsiusAFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
  }

function convertirFahrenheitACelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8;
    return celsius;
  }

const prompt = require('prompt-sync')({sigint: true});
console.log("Introduce la operación a realizar: " + "\n" + "1-Cesius a Farenheit" + "\n" + "2-Farenheit a Celsius");
var operacion = parseInt(prompt("Opción: "));
//Introduce los números
var a = prompt('Introduce el valor a convertir: ');
resultado = 0;
switch(operacion) {
    case 1:
      resultado = convertirCelsiusAFahrenheit(a);
      break;
    case 2:
    resultado = convertirFahrenheitACelsius(a);
      break;
    default:
        console.log("Operación no existente");
        return;
      // code block
  }

console.log("Resultado: " + resultado); 
