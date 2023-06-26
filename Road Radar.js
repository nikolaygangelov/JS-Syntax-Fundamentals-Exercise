function driverSpeedLimits(speed, area) {
    let speedLimit = '';
    if (area === 'motorway') {
        speedLimit = 130;
    }else if (area === 'interstate') {
        speedLimit = 90;
    }else if (area === 'city') {
        speedLimit = 50;
    }else if (area === 'residential') {
        speedLimit = 20;
    }

    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }else if (speed > speedLimit) {
        let difference = speed - speedLimit;
        if (difference <= 20) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`);
        }else if (difference <= 40) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
        }else {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless speeding`);
        }
    }
}

driverSpeedLimits(21, 'residential')