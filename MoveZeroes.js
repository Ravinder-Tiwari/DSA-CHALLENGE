let nums = [0,1,0,3,12]

let k = 0;

for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== 0) {
        nums[k] = nums[i];
        k++;
    }
}

while(k < nums.length) {
    nums[k] = 0;
    k++;
}

console.log(nums);