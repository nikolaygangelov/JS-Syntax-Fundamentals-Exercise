function checkingForEqualNumbers(num) {
    const stringOfNumbers = num.toString();
    let sum = 0;
    let isEqual = true;
    for (let i = 0; i < stringOfNumbers.length; i++) {
        if (i !== stringOfNumbers.length - 1) {
            if (stringOfNumbers[i] !== stringOfNumbers[i + 1]) {
                isEqual = false;
            }
            
        }
        sum += parseInt(stringOfNumbers[i]);
        
    }
    
    if (isEqual) {
        console.log(true);
    }
    else {
        console.log(false);
    }

    console.log(sum);
}

checkingForEqualNumbers(1234)