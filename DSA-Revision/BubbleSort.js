function BubbleSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                // Swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }

    }
    return arr;

    
}

// Example usage
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", arr);
let sortedArr = BubbleSort(arr);
console.log("Sorted array:", sortedArr);