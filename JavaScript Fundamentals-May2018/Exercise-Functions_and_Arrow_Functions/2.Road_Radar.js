function solve([speed, town]) {
    let towns = {
        residential: 20,
        city: 50,
        interstate: 90,
        motorway: 130
    };
    let maxSpeed = towns[town];
    let different = maxSpeed - speed;
    if (different < 0 && different >= -20){
        console.log(`speeding`);
    } else if (different < -20 && different >= -40){
        console.log('excessive speeding');
    } else if (different < 0){
        console.log(`reckless driving`);
    }
}
solve([21, 'residential']);
solve([120, 'interstate']);
solve([200, 'motorway']);