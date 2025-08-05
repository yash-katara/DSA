function PairSum(arr, target) {
    const pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}
const arr = [1, 2, 3, 4, 5, 6];
const target = 7;
console.log(PairSum(arr, target)); // Output: [[1, 6], [2, 5], [3, 4]]