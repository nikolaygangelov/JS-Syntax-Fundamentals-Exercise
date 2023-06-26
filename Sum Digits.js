function solve(num) {
    const stringOfNumbers = num.toString();
    let sum = 0;
    for (const item of stringOfNumbers) {
        sum += parseInt(item);
    }
    console.log(sum);
}

solve(245678)