class Solution {
    isHappy(N) {
        let sum = 0;
        let a = 1;
        let map = {};

        while (a) {
            if (N > 0) {
                let digit = N % 10;
                sum += digit * digit;
                N = Math.floor(N / 10);
            }
            else {
                if (sum === 1) {
                    return true;
                }

                if (map[sum]) {
                    a = 0;
                } else {
                    map[sum] = 1;
                }

                N = sum;
                sum = 0;
            }
        }

        return false;
    }
}