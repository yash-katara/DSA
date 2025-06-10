function ficonacci(n){
const fib = [0,1];
for(let i = 2; i <= n; i++){
    fib[i] = fib[i - 1] + fib[i - 2];   
}
//return fib[n];
return fib;
}
console.log(ficonacci(10)); // Output: 55