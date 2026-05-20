var maxProfit = function (prices) {
    let p = 0, i = 0, j = 1;
    while (j < prices.length) {
        if (prices[i] > prices[j]) {
            i = j;
            j = j + 1;
        }
        else {
            if(p < (prices[j] - prices[i])){
                p = prices[j] - prices[i]
            }
            j = j+1
        }
    }

    return p;
};

console.log(maxProfit([7,1,5,3,6,4]))