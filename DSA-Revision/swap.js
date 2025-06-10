let a = 10;
let b = 20;
let temp;
 temp = a;
a = b;
b = temp;
console.log("After swapping:");
console.log("a =", a);  
console.log("b =", b);

[a, b] = [b, a];
console.log("After swapping using destructuring:"); 
console.log("a =", a);
console.log("b =", b);


function swap(x, y) {
    let temp;
    temp = x;
    x = y;
    y = temp;
    return [x, y];
}
let x = 30;
let y = 40;      
console.log(swap(x, y)); // Output: [40, 30]

