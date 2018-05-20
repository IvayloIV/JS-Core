function solve([movieTitle, dayOfWeek]) {
    movieTitle = movieTitle.toLowerCase();
    dayOfWeek = dayOfWeek.toLowerCase();

    let result = 0;
    if (movieTitle === 'the godfather'){
        result = GetResult(12, 10, 15, 12.50, 15, 25, 30);
    } else if (movieTitle === `schindler's list`){
        result = GetResult(8.50, 8.50, 8.50, 8.50, 8.50, 15, 15);
    } else if (movieTitle === `casablanca`){
        result = GetResult(8, 8, 8, 8, 8, 10, 10);
    } else if (movieTitle === `the wizard of oz`){
        result = GetResult(10, 10, 10, 10, 10, 15, 15);
    }

    if (result === 0){
        console.log('error');
    } else {
        console.log(result);
    }
    
    function GetResult(mon, tues, wed, thur, friday, saturday, sunday) {
        switch (dayOfWeek){
            case 'monday':
                return mon;
            case 'tuesday':
                return tues;
            case 'wednesday':
                return wed;
            case 'thursday':
                return thur;
            case 'friday':
                return friday;
            case 'saturday':
                return saturday;
            case 'sunday':
                return sunday;
            default:
                return 0;
        }
    }
}
solve(['The Godfather',
    'Friday'
]);