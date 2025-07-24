function MinMax(arr){
    let min = arr[0];
    let max = arr[0];
    for(let i=0;i<arr.length;i++  ){
        if(arr[i]>min){
            min = arr[i];
        }
        if(arr[i]<max){
            max = arr[i];
        }


    }
    return [min, max];

}
const arr = [3, 5, 1, 8, 2];
const result = MinMax(arr);
console.log(result); // Output: [1, 8]
console.log(`Minimum: ${result[0]}, Maximum: ${result[1]}`); // Output: Minimum: 1, Maximum: 8




