function priceOfVacation(numerOfPeople, groupType, weekDay) {
    
    if (groupType === 'Students') {
        if (weekDay === 'Friday') {
            pricePerPerson = 8.45;
        }else if (weekDay === 'Saturday') {
            pricePerPerson = 9.80;
        }else if (weekDay === 'Sunday') {
            pricePerPerson = 10.46;
        }
    }else if (groupType === 'Business') {
        if (weekDay === 'Friday') {
            pricePerPerson = 10.90;
        }else if (weekDay === 'Saturday') {
            pricePerPerson = 15.60;
        }else if (weekDay === 'Sunday') {
            pricePerPerson = 16;
        }
    }else if (groupType === 'Regular') {
        if (weekDay === 'Friday') {
            pricePerPerson = 15;
        }else if (weekDay === 'Saturday') {
            pricePerPerson = 20;
        }else if (weekDay === 'Sunday') {
            pricePerPerson = 22.50;
        }
    }

    if (groupType === 'Students') {
        if (numerOfPeople >= 30) {
            pricePerPerson *= 0.85;
        } 
        totalPrice = numerOfPeople * pricePerPerson;
    }else if (groupType === 'Business') {
        if (numerOfPeople >= 100) {
            totalPrice = (numerOfPeople - 10) * pricePerPerson;
        }else {
            totalPrice = numerOfPeople * pricePerPerson;
        }
    }else if (groupType === 'Regular') {
        if (numerOfPeople >= 10 && numerOfPeople <= 20) {
            pricePerPerson *= 0.95;
        }
        totalPrice = numerOfPeople * pricePerPerson;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

priceOfVacation(30, 'Students', 'Sunday')