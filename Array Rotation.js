function firstElementBecomesLast(array, numberOfRotation) {
    for (let i = 1; i <= numberOfRotation; i++) {
        array.push(array.shift())
    }
    console.log(array.join(' '));
}

firstElementBecomesLast([51, 47, 32, 61, 21], 2)