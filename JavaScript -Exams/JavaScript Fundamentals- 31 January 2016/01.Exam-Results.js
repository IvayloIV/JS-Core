function solve(arr) {
    arr = arr.filter(a => a !== '');
    let course = arr.pop().trim();
    let allCurrentCourseResult = [];
    for (let element of arr) {
        let tokens = element.split(' ').filter(a => a !== '').map(a => a.trim());
        let student = tokens[0];
        let currentCourse = tokens[1];
        let examPoints = Number(tokens[2]);
        let courseBonus = Number(tokens[3]);

        if (course === currentCourse){
            allCurrentCourseResult.push(examPoints);
        }
        if (examPoints < 100){
            console.log(`${student} failed at "${currentCourse}"`);
            continue;
        }

        let totalPoints = (examPoints * 0.2) + courseBonus;
        let grade = ((totalPoints / 80) * 4) + 2;
        if (grade > 6) {
            grade = 6;
        }
        console.log(`${student}: Exam - "${currentCourse}"; Points - ${Number(totalPoints.toFixed(2))}; Grade - ${grade.toFixed(2)}`);
    }
    let averageGrade = 0;
    if (allCurrentCourseResult.length > 0) {
        averageGrade = allCurrentCourseResult.reduce((a, b) => a + b) / allCurrentCourseResult.length;
        console.log(`"${course}" average points -> ${Number(averageGrade.toFixed(2))}`);
    }
}
solve([`   EDUU    JS-Basics                317          15         `,
`           RoYaL        HTML5        121         10        `,
`ApovBerger      OOP   0    10     `,
`Stamat OOP   190 10`,
`MINKA OOP   230 10`,
`   OOP`]);