function fibonacii(n){
   const fib = [0,1];
   for (let i=2; i<n;i++){
    fib[i]=fib[i-1]+fib[i-2];
   } 
   return fib;
}
console.log(fibonacii(10))



function fibonaccci(n) {
   if (n <= 1)
       return n;{
     
   return fibonaccci(n - 1) + fibonaccci(n - 2);
}
}
console.log(fibonaccci(6)); // Output: 8
