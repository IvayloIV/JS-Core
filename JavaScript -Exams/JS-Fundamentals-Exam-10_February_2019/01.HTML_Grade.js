function solve(examPoints, homework, totalHomework) {
    const maxPoints = 100;
    let totalPoints = examPoints / 400 * 90;
    let bonus = homework / totalHomework * 10;
    totalPoints += bonus;

    let grade = 3 + 2 * (totalPoints - maxPoints / 5) / (maxPoints / 2);
    if (grade < 3) {
        return '2.00';
    }

    if (grade >= 6 || examPoints === 400) {
        return '6.00';
    }

    return grade.toFixed(2);
}

console.log(solve(200, 5, 5));