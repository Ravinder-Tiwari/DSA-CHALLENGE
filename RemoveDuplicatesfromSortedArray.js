let arr = [1,1,2]
let i = 0;
let b = 1;
while(b<arr.length){
    if(arr[i] !==  arr[b]){
        i++;
        arr[i] = arr[b]
    }
    b++;
}


console.log(arr)