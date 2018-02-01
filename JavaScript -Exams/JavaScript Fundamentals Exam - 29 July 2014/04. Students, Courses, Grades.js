function solve(arr) {
    arr = arr.filter(a => a != "");
    var book = new Map();
    for(let element of arr){
        let elementTokens = element.split('|').filter(a => a != "");
        let name = elementTokens[0].trim();
        let course = elementTokens[1].trim();
        let grade = Number(elementTokens[2]);
        let visitTime = Number(elementTokens[3]);

        if (!book.has(course)){
            book.set(course, {
                'names' : [],
                'grades' : [],
                'visits' : []
            });
        }
        if (book.get(course)['names'].every(a => a != name)){
            book.get(course)['names'].push(name);
        }
        book.get(course)['grades'].push(grade);
        book.get(course)['visits'].push(visitTime);
    }


    let output = {};
    for(let element of [...book].sort(mySort)){
         let nameCourse = element[0];
         let sortedNames = element[1]['names'].sort();
         let averageGradeUnFixed = element[1]['grades'].reduce((a, b) => a + b) / element[1]['grades'].length;
         let averageGrade = Number(Number(`${averageGradeUnFixed.toFixed(2)}`).toString());
         let averageVisitsUnFixed = element[1]['visits'].reduce((a, b) => a + b) / element[1]['visits'].length;
         let averageVisits = Number(Number(`${averageVisitsUnFixed.toFixed(2)}`).toString());
         output[nameCourse] = {
             'avgGrade' : averageGrade,
             'avgVisits' : averageVisits,
             'students' : sortedNames
         };
    }
    console.log(JSON.stringify(output));

    function mySort(a, b){
        if (a[0] < b[0]){
            return -1;
        } else if (a[0] > b[0]){
            return 1;
        }else{
            return 0;
        }
    }
}
solve([`Peter Nikolov | PHP  | 5.50 | 0`,
`Maria Ivanova | Java | 5.83 | 37`,
`Ivan Petrov   | PHP  | 4.00 | 2`,
`Ivan Petrov   | C#   | 3.20 | 22`,
`Peter Nikolov | C#   | 5.50 | 18`,
`Maria Ivanova | C#   | 5.83 | 4`,
`Ivan Petrov   | JS   | 4.12 | 15`,
`Ivan Genov    | PHP  | 5.10 | 6`,
`Ivan Petrov   | SQL  | 5.96 | 12`,
`Peter Nikolov | Java | 6.00 | 9` ]);