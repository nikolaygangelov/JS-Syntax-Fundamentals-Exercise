function replacingWords(string1, string2) {
    const input1Array = string1.split(', ');

    for (const word of input1Array) {
        string2 = string2.replace('*'.repeat(word.length), word)

    }

    console.log(string2);
  }
  
  replacingWords('great', 
  'softuni is ***** place for learning new programming languages')