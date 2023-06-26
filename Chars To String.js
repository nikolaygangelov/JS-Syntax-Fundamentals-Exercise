function convertingCharsToString(ch1, ch2, ch3) {
    const characters = [ch1, ch2, ch3]
    let output = '';
    for (const char of characters) {
        output += char;
    }
    console.log(output);
}

convertingCharsToString('a', 'b', 'c')