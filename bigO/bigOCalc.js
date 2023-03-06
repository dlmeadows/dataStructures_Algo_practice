// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; //O(1)
    a = 50 + 3; //O(1)

    const t0 = performance.now(); //O(1)
    for (let i = 0; i < input.length; i++) { //O(n)
        anotherFunction(); //O(n)
        let stranger = true; //O(n)
        a++; //O(n)
    }
    const t1 = performance.now(); //O(1)
    console.log('perfomance time: ' + (t1 - t0));
    return a; //O(1)
}

// BIG O(5 + 4n) or O(n)

funChallenge(Array(1000).fill('hi'));
