function checkElements(start, end, arr) {
    let set = new Set(arr);

    for (let i = start; i <= end; i++) {
        if (!set.has(i)) {
            return false;
        }
    }

    return true;
}

console.log(checkElements)