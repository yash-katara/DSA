function reverseString(str){
    let reversed = '';
    for(let char of str){
reversed = char +reversed;
    }
return reversed;
}
console.log(reverseString('yash katara'));

// Two pointer approach
function reverseString(str) {
    let arr = str.split(''); 
    let left = 0; 
    let right = arr.length - 1; 

    while (left < right) {
        
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join(''); 
}


const string = "hello";
console.log(reverseString(string)); 
