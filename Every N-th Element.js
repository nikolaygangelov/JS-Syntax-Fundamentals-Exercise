function printingEveryNthElement(stringArray, numberOfSteps) {
    let newArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        if (i % numberOfSteps === 0) {
            newArray.push(stringArray[i])
        }
    }
    return newArray;
}

console.log(printingEveryNthElement(['5',
'20',
'31',
'4',
'20'],
2));