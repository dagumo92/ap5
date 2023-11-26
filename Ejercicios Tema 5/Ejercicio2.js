function contarVocales(texto) {
    let contadorVocales = 0;
    let vocales = ['a','e','i','o','u','A','E','I','O','U','á','é','í','ó','ú','Á','É','Í','Ó','Ú'];
     for(let i = 0; i< texto.length; ++i) {
      console.log ("Letra a analizar: " + texto[i]);
      if (vocales.indexOf(texto[i]) >= 0) {
       ++contadorVocales;
       console.log ("Vocal encontrada: " + texto[i] + " sumamos 1");
      }
     }
   
      return contadorVocales;
   }
   
const prompt = require('prompt-sync')({sigint: true});
var texto = prompt('Introducir frase: ');
//const texto = "La casa y el camión";
console.log ("Vocales encontradas: " + contarVocales(texto));
   