const arr = [1,2,3,'yash'];
arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift();

for (let item of arr) {
    console.log(item);
}