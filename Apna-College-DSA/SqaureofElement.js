function SqaureofElement(arr) {
    const arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2[i] = arr[i] * arr[i]; 
    }
    return arr2; 
}

const arr = [1, 2, 3, 4, 5];
console.log(SqaureofElement(arr)); 


const square =arr.map(element=> element * element);
console.log(square); 

                                                                                                                                                                                                                                                                                                                                                                                                                                                                      