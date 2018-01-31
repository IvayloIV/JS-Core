function solve(arr) {
    arr = arr.filter(a => a != '');
    let sortedType = arr.shift().split('^').filter(a => a != '');

    let book = new Map();
    book.set('Student', []);
    book.set('Trainer', []);
    for(let element of arr){
        let elemObj = JSON.parse(element);        
        let id = Number(elemObj['id']);
        let firstName = elemObj['firstname'];
        let lastName = elemObj['lastname'];
        let role = elemObj['role'];
        if (role == "student"){
            let averageGreed = elemObj['grades'].map(Number).reduce((a, b) => a + b) / elemObj['grades'].length;
            let certificate = elemObj['certificate'];
            let level = Number(elemObj['level']);
            let newObj = {
                'id' : id,
                'firstname' : firstName,
                'lastname' : lastName,
                'averageGrade' : averageGreed,
                'certificate' : certificate,
                'level' : level
            };
            book.get('Student').push(newObj);
        }
        else if (role == "trainer"){
            let courses = elemObj['courses'];
            let lecturesPerDay = Number(elemObj['lecturesPerDay']);
            let newObj = {
                'id' : id,
                'firstname' : firstName,
                'lastname' : lastName,
                'courses' : courses,
                'lecturesPerDay' : lecturesPerDay
            };
            book.get('Trainer').push(newObj);
        }
    }
    let studentsBook = [...book.get('Student')].sort(sortStudents);
    let trainersBook = [...book.get('Trainer')].sort(sortTrainers);
    for(let element of studentsBook){
        let currendGrade = element['averageGrade'];
        element['averageGrade'] = `${currendGrade.toFixed(2)}`;
        delete element['level'];
    }
    let outputObj = {};
    outputObj['students'] = studentsBook;
    outputObj['trainers'] = trainersBook;
    console.log(JSON.stringify(outputObj));

    function sortTrainers(a, b){
        let coursesA = a['courses'].length;
        let coursesB = b['courses'].length;

        let lecturesA = a['lecturesPerDay'];
        let lecturesB = b['lecturesPerDay'];
        if (coursesA < coursesB){
            return -1;
        } else if (coursesA > coursesB){
            return 1;
        } else {
            if (lecturesA < lecturesB){
                return -1;
            } else if (lecturesA > lecturesB){
                return 1;
            } else {
                return 0;
            }
        }
    }

    function sortStudents(a , b){
        if (sortedType[0] == "name"){
            if (a['firstname'] < b['firstname']){
                return -1;
            } else if (a['firstname'] > b['firstname']){
                return 1;
            } else {
                if (a['lastname'] < b['lastname']){
                    return -1;
                } else if (a['lastname'] > b['lastname']){
                    return 1;
                } else {
                    return 0;
                }
            }
        } else if (sortedType[0] == "level"){
            if (a['level'] < b['level']){
                return -1;
            } else if (a['level'] > b['level']){
                return 1;
            } else {
                if (a['id'] < b['id']){
                    return -1;
                } else if (a['id'] > b['id']){
                    return 1;
                } else{
                    return 0;
                }
            }
        }
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