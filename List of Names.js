function sortingNames(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(`${i+1}.${names.sort((a,b)=> a.toLowerCase().localeCompare(b.toLowerCase()))[i]}`);
    }
}

sortingNames(["John", "Bob", "Christina", "Ema"])