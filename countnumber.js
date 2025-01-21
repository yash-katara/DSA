function countNumber(num){
    num = Math.abs(num)
    let count = 0;
    if (num ===0){
      return 1;
    }
    while(num>0){
        num = Math.floor(num/10);
       count++;

    }
    return count;
}
console.log(countNumber(12345));
console.log(countNumber(-12345));
