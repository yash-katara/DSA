function ficonacci(n){
const fib = [0,1];
for(let i = 2; i <= n; i++){
    fib[i] = fib[i - 1] + fib[i - 2];   
}
//return fib[n];
return fib;
}
console.log(ficonacci(10)); // Output: 55


// recursive approach
function fibonacci(n) {
    if (n <= 1) {
        return n; // Base case: return n for 0 or 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}
console.log(fibonacci(10)); // Output: 55
