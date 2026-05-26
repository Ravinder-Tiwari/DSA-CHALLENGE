function ContainDuplicate(arr){

    let n = arr.length;
    let map = {}

    // for(let i = 0; i<= )

    for(let i = 0; i<n; i++) {
        // console.log(arr[i])
        if(!map[arr[i]]){
            map[arr[i]] = 1;
        }
        else{
            console.log("matched")
            return true;
        }
    };

    return false
}

console.log(ContainDuplicate([1,2,3,1]))