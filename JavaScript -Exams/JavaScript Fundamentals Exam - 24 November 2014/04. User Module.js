function solve(arr) {
    arr = arr.filter(a => a !== '');
    let typeOfSort = arr.shift().split('^')[0];
    let students = [];
    let trainers = [];
    for (let arrElement of arr) {
        let tokens = JSON.parse(arrElement);
        if (tokens.role === 'student'){
            students.push({
                id : tokens.id,
                firstname : tokens.firstname,
                lastname : tokens.lastname,
                averageGrade : (tokens.grades.map(Number).reduce((a, b) => a + b) / tokens.grades.length).toFixed(2),
                certificate : tokens.certificate,
                level : tokens.level
            });
        } else if (tokens.role === 'trainer') {
            trainers.push({
                id : tokens.id,
                firstname : tokens.firstname,
                lastname : tokens.lastname,
                courses: tokens.courses,
                lecturesPerDay : tokens.lecturesPerDay
            });
        }
    }
    let result = {
        students : [],
        trainers : []
    };

    let sorts = {level, name};
    for (let elements of Object.entries(students).sort(sorts[typeOfSort])) {
        delete elements[1].level;
        result['students'].push(elements[1]);
    }

    for (let elements of Object.entries(trainers).sort(sortTrainers)) {
        result['trainers'].push(elements[1]);
    }

    console.log(JSON.stringify(result));

    function sortTrainers(a, b) {
        if (a[1].courses.length !== b[1].courses.length){
            return a[1].courses.length - b[1].courses.length;
        }
        return a[1].lecturesPerDay - b[1].lecturesPerDay;
    }

    function level(a, b) {
        if (a[1].level !== b[1].level){
            return a[1].level - b[1].level;
        }
        return a[1].id - b[1].id;
    }

    function name(a, b) {
        if (a[1].firstname !== b[1].firstname){
            return a[1].firstname.localeCompare(b[1].firstname);
        }
        return a[1].lastname.localeCompare(b[1].lastname);
    }
}
solve([ 'name^courses',
'{"id":0,"firstname":"Angel","lastname":"Ivanov","town":"Plovdiv","role":"student","grades":["5.89"],"level":2,"certificate":false}',
'{"id":1,"firstname":"Mitko","lastname":"Nakova","town":"Dimitrovgrad","role":"trainer","courses":["PHP","Unity Basics"],"lecturesPerDay":6}',
'{"id":2,"firstname":"Angel","lastname":"Georgiev","town":"Varna","role":"student","grades":["5.59","3.50","4.54","5.05","3.45"],"level":4,"certificate":false}',
'{"id":3,"firstname":"Ivan","lastname":"Ivanova","town":"Vidin","role":"trainer","courses":["JS","Java","JS OOP","Database","OOP","C#"],"lecturesPerDay":7}',
'{"id":4,"firstname":"Mitko","lastname":"Petrova","town":"Sofia","role":"trainer","courses":["Database","JS Apps"],"lecturesPerDay":2}',
'' ]
);