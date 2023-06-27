function mathOperations(num, string1, string2, string3, string4, string5) {
    let stringArray = [num, string1, string2, string3, string4, string5];
    currentNumber = parseInt(stringArray[0]);
    for (i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === 'chop') {
            currentNumber /= 2;
            console.log(currentNumber);
        } else if (stringArray[i] === 'dice') {
            currentNumber = Math.sqrt(currentNumber);
            console.log(currentNumber);
        } else if (stringArray[i] === 'spice') {
            currentNumber++;
            console.log(currentNumber);
        } else if (stringArray[i] === 'bake') {
            currentNumber *= 3;
            console.log(currentNumber);
        } else if (stringArray[i] === 'fillet') {
            currentNumber *= 0.8;
            console.log(currentNumber);
        }
    }
}

mathOperations('32', 'chop', 'chop', 'chop', 'chop', 'chop');