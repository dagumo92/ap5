function numeroAFecha(numero){
    if (Number.isInteger(numero)) {
        if (numero > 0){
            var horas = Math.floor(numero/60);
            var minutos = numero % 60;
            var segundos = numero % 60;
            
            horas =('0' + horas).slice(-2);
            minutos =('0' + minutos).slice(-2);
            segundos =('0' + segundos).slice(-2);
            return `${horas}:${minutos}:${segundos}`;
        } else {
            return null;
        }
    }else {
        throw new Error('El valor pasado como argumento no es un número ente-ro.');
    }

}

try {
    console.log (numeroAFecha(11212315));
}catch (e) {
    console.log(e);
}
