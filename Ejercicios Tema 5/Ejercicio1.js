const prompt = require('prompt-sync')({sigint: true});
var base= parseInt(prompt("dime la base del triangulo: "));
var altura= parseInt(prompt("dime la altura del triangulo: "));
console.log("el area del triangulo es:" + ((base * altura)/2));