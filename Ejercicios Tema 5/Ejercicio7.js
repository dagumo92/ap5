function factorialRecursivo (n){
    if(n==0){
        return 1;
    }
    return n * factorialRecursivo (n-1);
}
console.log(factorialRecursivo(9))
