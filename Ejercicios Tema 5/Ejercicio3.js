var sumarDigitos = function(num) {
    if(0<num) {
        return (num%10) + sumarDigitos(Math.floor(num/10));
    }
    return num;
};

console.log(sumarDigitos(333));
