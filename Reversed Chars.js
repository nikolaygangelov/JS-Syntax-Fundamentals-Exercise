function reversingChars(ch1, ch2, ch3) {
    const characters = [ch1, ch2, ch3]
    let output = '';
    characters.reverse().forEach(ch => {output += ` ${ch}`})
    console.log(output);
}

reversingChars('1', 'L', '&')