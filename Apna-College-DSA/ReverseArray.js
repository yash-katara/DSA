function ReverseArray(arr){
    let start = 0;
    let end = arr.length - 1;
    while(start<end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;

}
        const arr = [1, 2, 3, 4, 5];
console.log("Original array:", arr);
let reversedArr = ReverseArray(arr);
console.log("Reversed array:", reversedArr);




//2nd Way
function ReverseArray2(arr2){
    let reversedArray = [];
    for(let i = arr2.length-1; i>= 0; i--){
        reversedArray.push(arr2[i]);
        console.log(arr2[i]);
    }
}
// Example usage
let arr2 = [1, 2, 7, 4, 5];
console.log("Reverse array:", ReverseArray2(arr2)); 


// Output: 5 4 3 2 1
