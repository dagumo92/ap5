
function construirMatrizVacia (fil, col){
    var matrix = [];
      for(var i=0; i<fil; i++) {
          matrix[i] = new Array(col);
      }

    return matrix;
}

function rellenarMatriz(fil, col, matrix){
    const prompt = require('prompt-sync')({sigint: true});
    for(var i = 0; i < fil; i++) {  
        for(var j = 0; j < col; j++) {
            matrix[i][j] = (prompt('Introduce valor de la Fila: ' + i + ' y Columna: ' + j + ': '));  
        }
      }
    return matrix;

}

function sumaFilas(fil, col, matrix) {
    try {
        console.log("La suma de las filas es la siguiente: ")
        for(var i = 0; i < fil; i++) {  
            var filaSuma = 0;
            for(var j = 0; j < col; j++) {
                filaSuma = parseInt(filaSuma) + parseInt(matrix[i][j]);
            }
            console.log('La suma de la fila: ' + i + ' es: ' + filaSuma);
        }
    } catch (e) {
    console.error("Exception thrown", e);}
}

function sumaColumnas(fil, col, matrix) {
    try {
        console.log("La suma de las columnas es la siguiente: ")
        for(var i = 0; i < col; i++) {  
            var columnaSuma = 0;
            for(var j = 0; j < fil; j++) {
                columnaSuma = parseInt(columnaSuma) + parseInt(matrix[j][i]);
            }
            console.log('La suma de la columna: ' + i + ' es: ' + columnaSuma);
        }
    } catch (e) {
    console.error("Exception thrown", e);}
}

function calculaMediaFilas(fil, col, matrix) {
    try {
        console.log("La media de las filas es la siguiente: ")
        for(var i = 0; i < fil; i++) {  
            var sumaFila = 0;
            for(var j = 0; j < col; j++) {
                sumaFila = parseInt(sumaFila) + parseInt(matrix[i][j]);
            }
            var media = parseInt(sumaFila) / parseInt(col);
            console.log('La media de la fila: ' + i + ' es: ' + media);
        }
    } catch (e) {
    console.error("Exception thrown", e);}
}

function calculaMediaColumnas(fil, col, matrix) {
    try {
        console.log("La media de las columnas es la siguiente: ")
        for(var i = 0; i < col; i++) {  
            var columnaSuma = 0;
            for(var j = 0; j < fil; j++) {
                columnaSuma = parseInt(columnaSuma) + parseInt(matrix[j][i]);
            }
            var media = parseInt(columnaSuma) / parseInt(fil);
            console.log('La media de la columna: ' + i + ' es: ' + media);
        }
    } catch (e) {
    console.error("Exception thrown", e);}
}

function imprimirMatriz(fil, col, matrix) {
    try {
        console.log("La matriz introducida por el usuario es la siguiente: ")
        for(var i = 0; i < fil; i++) {  
            var filaImprimir = '';
            for(var j = 0; j < col; j++) {
                filaImprimir = filaImprimir + ' ' + matrix[i][j];
            }
            console.log(filaImprimir);
        }
    } catch (e) {
    console.error("Exception thrown", e);}
}

function solicitarNumeroAlUsuario(mensaje){
    const prompt = require('prompt-sync')({sigint: true}); 
    return prompt(mensaje); 
}

function calcularMinimoFilCol(fil, col){
    if(fil<col)
        return fil;
    else
        return col;
}

function mostrarDiagonalPrincipal (min, matrix){
    try {
        console.log("La diagonal principal es: ");
        var imprimir = '';
        for(var i = 0; i < min; i++) {      
            var imprimir = imprimir + ' ' + matrix[i][i];           
        }
        console.log(imprimir);
    } catch (e) {
    console.error("Exception thrown", e);}
}

try {
      //Solicitar filas de la matriz al usuario
      var fil = solicitarNumeroAlUsuario('Introduce las filas de la matriz : ');

      //Solicitar columnas de la matriz al usuario
      var col = solicitarNumeroAlUsuario('Introduce las columnas de la matriz : ');
 
      //Construir matriz vacía
      var matrixVacia = construirMatrizVacia(fil, col)
      
      //Rellenar filas y columnas de la matriz
      var matrix = rellenarMatriz(fil, col, matrixVacia)

      //Funcion que muestra la matriz por terminal
      imprimirMatriz(fil, col, matrix);

      //función que suma las filas
      sumaFilas(fil, col, matrix);

      //función que suma las columnas
      sumaColumnas(fil, col, matrix);

      //funcion que calcula una media de filas
      calculaMediaFilas(fil, col, matrix);   

      //funcion que calcula una media de columnas
      calculaMediaColumnas(fil, col, matrix); 

      //Sacar mínimo fila y columna
      min = calcularMinimoFilCol(fil, col);

      //Mostrar diagonal principal de la matriz
      mostrarDiagonalPrincipal(min, matrix);
    
} catch (e) {
    console.error("Exception thrown", e);
}