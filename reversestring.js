function reversestring(str){
    return str.split("").reverse().join("");
}

console.log(reversestring("hello"))


function reverseString(str) {
    let reversed = "";
   
    for (let char of str) {
       console.log(char);
       
        
      reversed = char + reversed ;
       
    }
    return reversed;
}
console.log(reverseString('helo'));
