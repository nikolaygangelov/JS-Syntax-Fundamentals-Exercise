function sortingNumbers(numbers) {
    const sortedNumbers = [];
    
    while (numbers.length > 0) {
      sortedNumbers.push(Math.min(...numbers))
      numbers.splice(numbers.indexOf(Math.min(...numbers)), 1)
      if (numbers.length === 0){
        break;
      }
      sortedNumbers.push(Math.max(...numbers))
      numbers.splice(numbers.indexOf(Math.max(...numbers)), 1)
      if (numbers.length === 0){
        break;
      }
    }
  
  return sortedNumbers;
}

sortingNumbers([1,
    65, 3, 52, 48, 63, 31, -3, 18, 56])