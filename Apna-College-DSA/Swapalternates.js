function swapalternate(arr){
    for (let i=0;i<arr.length-1;i+=2){
        let temp = arr[i];
        arr[i]=arr[i+1];
        arr[i+1] = temp;
    }
    return arr;
}
const arr = [1,2,3,4,5,6,7];
console.log(swapalternate(arr));