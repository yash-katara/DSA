function buySell(prices) {
    let min = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {

        min = Math.min(min, prices[i]);
        let max= prices[i] - min;
        maxProfit = Math.max(maxProfit, max);

    }
    return maxProfit;
}

// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
console.log(buySell(prices)); // Output: 5 (Buy on day 2 and sell on day 5)



//2nd Appproach

 function buySell2(prices2) {
    let max = 0;
    for (let i = 0; i < prices2.length; i++) {
        for (let j = i + 1; j < prices2.length; j++) {
            if (prices2[j] > prices2[i]) {
                max = Math.max(max, prices2[j] - prices2[i]);
            }
        }
    }
    return max;
}
// Example usage:
const prices2 = [7, 1, 5, 3, 6, 4];
console.log(buySell2(prices2)); // Output: 5 (Buy on day 2 and sell on day 5)