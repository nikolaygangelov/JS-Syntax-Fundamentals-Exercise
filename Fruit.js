function neededFruitMoney(fruit, weight, money) {
    console.log(`I need $${(money/1000*weight).toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`);
}

neededFruitMoney('orange', 2500, 1.80)