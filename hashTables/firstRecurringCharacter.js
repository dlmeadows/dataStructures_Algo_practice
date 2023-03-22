//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined
function _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
}

function firstRecurringCharacter(input) {
    // validate input

    let value = undefined;
    const obj = {};
    for (let i = 0; i < input.length; i++) {
        const int = input[i];
        if (obj[int]) {
            return int;
        }
        obj[int] = true;
    }

    return value;
}

console.log(firstRecurringCharacter([0, 5, 1, 0, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 3, 4, 5]));
console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([]));
console.log(firstRecurringCharacter([3]));
console.log(firstRecurringCharacter([3, 3]));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
