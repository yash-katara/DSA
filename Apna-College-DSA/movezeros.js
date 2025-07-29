function moveZeroes(arr){
    let i =0;
    for(let j=0; j<arr.length; j++){
        if(arr[j]!==0){
            arr[i]=arr[j];
            i++;
        }
    }
    // Fill the rest of the array with zeros
    while(i<arr.length){
        arr[i] = 0;
        i++;
    }
}

const arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr); // Output: [1, 3, 12, 0, 0]