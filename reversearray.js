function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}


const arr = [1, 2, 3, 4, 5];

console.log(reverseArray(arr));