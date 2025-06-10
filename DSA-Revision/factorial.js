function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    let fact = 1;
    for(let i = 2; i <= n; i++){
        fact *= i;
    }
    return fact;

}
console.log(factorial(10)); // Output: 120



function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; 
    }
    return n * factorial(n - 1);  
}
console.log(factorial(5)); // Output: 120