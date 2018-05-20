function calendar([day, month, year]) {
    let currentData = new Date(year, month - 1, day);
    let lastMonthData = new Date(year, month - 1, 0);
    let endOfCurrentMonthData = new Date(year, month, 0);
    let currentData2 = new Date(year, month - 1, 1);
    let currentDay = currentData2.getDay();
    let lastMonthCurrentData = lastMonthData.getDate();

    let counter = 0;
    let result = `<table>\n<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n<tr>`;
    if (currentDay !== 0) {
        let startData = lastMonthCurrentData - currentDay + 1;
        for (let i = startData; i <= lastMonthCurrentData; i++) {
            result += `<td class="prev-month">${i}</td>`;
            counter++;
        }
    }

    let startDay = 1;
    let isEnding = true;
    while (isEnding){
        for (let i = counter; i < 7; i++) {
            if (currentData.getDate() === startDay && isEnding === true){
                result += `<td class="today">${startDay++}</td>`;
            } else if (startDay > endOfCurrentMonthData.getDate()){
                isEnding = false;
                result += `<td class="next-month">${(startDay++ % endOfCurrentMonthData.getDate())}</td>`;
            } else {
                result += `<td>${startDay++}</td>`;
            }
        }

        if (startDay >= endOfCurrentMonthData.getDate()){
            isEnding = false;
        }

        result += `</tr>\n`;
        if (isEnding){
            result += `<tr>`;
        }
        counter = 0;
    }
    result += `</table>`;
    return result;
}

//console.log(calendar([4, 9, 2016]));