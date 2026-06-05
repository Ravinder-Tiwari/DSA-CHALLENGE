function intersectionOfTwoArrays(a, b) {
    let map = {}
    let ans = []
    let i = 0;
    let j = 0;
    a = a.sort((a, b) => a - b);
    b = b.sort((a, b) => a - b);
    let n1 = a.length;
    let n2 = b.length

    while (i != n1 && j != n2) {
        if (a[i] < b[j]) {
            i++;
        }
        else if (a[i] > b[j]) {
            j++;
        }
        else {
            if (!map[a[i]]) {
                map[a[i]] = 1;
                ans.push(a[i])
            }
            i++;
            j++;
        }
    }

    return ans;

}

inp
intersectionOfTwoArrays()