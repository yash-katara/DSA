// 1. Sum of first N natural numbers
function sumN(n) {
    if (n === 0) return 0; // Base case
    return n + sumN(n - 1); // Recursive case
}

// 2. Check if a string is a palindrome
function isPalindrome(str, start = 0, end = str.length - 1) {
    if (start >= end) return true; // Base case
    if (str[start] !== str[end]) return false;
    return isPalindrome(str, start + 1, end - 1); // Recursive case
}

// 3. GCD of two numbers
function gcd(a, b) {
    if (b === 0) return a; // Base case
    return gcd(b, a % b); // Recursive case
}

// 4. Reverse a string
function reverseString(str) {
    if (str === "") return ""; // Base case
    return reverseString(str.substring(1)) + str[0]; // Recursive case
}

// 5. Power calculation (x^n)
function power(x, n) {
    if (n === 0) return 1; // Base case
    return x * power(x, n - 1); // Recursive case
}

// 6. Tower of Hanoi
function towerOfHanoi(n, fromRod, toRod, auxRod) {
    if (n === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return;
    }
    towerOfHanoi(n - 1, fromRod, auxRod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n - 1, auxRod, toRod, fromRod);
}

// 7. Fibonacci series up to N terms
function fibonacci(n) {
    if (n <= 1) return n; // Base case
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}

// 8. Find maximum element in an array
function findMax(arr, n) {
    if (n === 1) return arr[0]; // Base case
    return Math.max(arr[n - 1], findMax(arr, n - 1)); // Recursive case
}

// 9. Count number of digits in an integer
function countDigits(n) {
    if (n === 0) return 0; // Base case
    return 1 + countDigits(Math.floor(n / 10)); // Recursive case
}

// 10. Sum of digits of a number
function sumOfDigits(n) {
    if (n === 0) return 0; // Base case
    return (n % 10) + sumOfDigits(Math.floor(n / 10)); // Recursive case
}

// Example usage
console.log(sumN(5)); // Output: 15
console.log(isPalindrome("madam")); // Output: true
console.log(gcd(48, 18)); // Output: 6
console.log(reverseString("hello")); // Output: "olleh"
console.log(power(2, 3)); // Output: 8
towerOfHanoi(3, 'A', 'C', 'B'); // Solves Tower of Hanoi for 3 disks
console.log(fibonacci(6)); // Output: 8
console.log(findMax([1, 5, 3, 9, 2], 5)); // Output: 9
console.log(countDigits(12345)); // Output: 5
console.log(sumOfDigits(1234)); // Output: 10
