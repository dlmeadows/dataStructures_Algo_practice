function mergeSortedArrays(arr1, arr2) {

    if (arr1.length === 0) {
        return arr2;
    }

    if (arr2.length === 0) {
        return arr1;
    }

    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return false;
    }

    const newArr = [];
    let i = 0;
    let j = 0;
    while (arr1[i] || arr2[j]) {
       if (!arr2[j] || arr1[i] <= arr2[j]) {
            newArr.push(arr1[i]);
            i++
        } else {
            newArr.push(arr2[j]);
            j++
        }
    }
    return newArr;
}


const result = mergeSortedArrays([1, 3, 6, 89], [4, 6, 14]);

console.log(result);
