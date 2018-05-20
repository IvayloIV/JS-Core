function solve(arr) {
    let [obj1, prop1, obj2, prop2, obj3, prop3] = arr;
    let result = {};
    result[obj1] = prop1;
    result[obj2] = prop2;
    result[obj3] = prop3;
    return result;
}

console.log(solve(['name', 'Pesho', 'age', '23', 'gender', 'male']));