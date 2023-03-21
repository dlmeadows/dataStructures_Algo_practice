const reverse = (string) => {
    // check if input is a string
    if (!string || string.length < 2 || typeof string !== 'string') return false;
    const arr = string.split('');
    let revStr = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        revStr += arr[i];
    }

    return revStr;
}

function reverse2 (string) {
    return string.split('').reverse().join('');
}

const reverse3 = (string) => [...string].reverse().join('');

const revStr = reverse3('I am David');
console.log(revStr);
