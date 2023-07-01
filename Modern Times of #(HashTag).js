function printingSpecialWord(string) {
    const inputArray = string.split(' ');
    for (const word of inputArray) {
        if (word.startsWith('#') && word.length > 1 && !/\d/.test(word)) {
            console.log(word.substring(1, word.length));
            
        }
    }
}

printingSpecialWord('The symbol # is known #variously in English-speaking #regions as the #number sign')