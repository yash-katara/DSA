
function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}


const arr = [1, 2, 3, 4, 5];

console.log(reverseArray(arr));

function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}


const originalArray = [1, 2, 3, 4, 5];
const newArray = reverseArray(originalArray);
console.log('yash' ,newArray); 



const arr1 = [1, 2, 3, 4, 5];
const reversedArray = [];
for(let i = arr1.length -1; i>=0; i--){
    reversedArray.push(arr1[i]);

}
console.log(reversedArray);

