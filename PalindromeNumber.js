/**
 * @param {number} n
 * @returns {boolean}
 */
class Solution {
    isPalindrome(n) {
        if(n<0){
            n = Math.abs(n)
        }
        let ans = n;
        let reverse = 0;
        
        while(n>0){
            let digit = n%10;
            reverse = reverse*10 + digit;
            n = Math.floor(n/10);
        }
        
        if(ans === reverse){
            return true;
        }
        else{
            return false;
        }
    }
}
