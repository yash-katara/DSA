function isPrime(n){
    if(n<2){
        return false; // 0 and 1 are not prime numbers
    }
    for (let i=2; i<n; i++){
        if(n % i === 0){
            return false; // n is divisible by i, so it's not prime
        }
    }
    return true; // n is prime
}
console.log(isPrime(11)); 
console.log(isPrime(7)); 
console.log(isPrime(2));
console.log(isPrime(1)); 
console.log(isPrime(0)); 
