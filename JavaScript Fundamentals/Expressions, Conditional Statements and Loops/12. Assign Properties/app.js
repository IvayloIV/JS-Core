function proprties(arr) {
    let obj = {};
    for (var i = 1; i < arr.length; i += 2) {
        let key = arr[i - 1];
        let value = arr[i];
        obj[key] = value; 
    }
    console.log(obj);
}
proprties(['name', 'Pesho', 'age', '23', 'gender', 'male']);