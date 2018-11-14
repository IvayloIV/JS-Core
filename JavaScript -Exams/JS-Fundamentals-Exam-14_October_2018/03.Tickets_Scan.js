function solve(str, command) {
    const passengerNamePattern = / [A-Z][A-Za-z]*-[A-Z][A-Za-z]*(\.-[A-Z][A-Za-z]*)? /;
    const airportPattern = / ([A-Z]{3})\/([A-Z]{3}) /;
    const flightNumberPattern = / [A-Z]{1,3}[0-9]{1,5} /;
    const companyPattern = /- ([A-Z][A-Za-z]*)\*([A-Z][A-Za-z]*) /;

    let commands = {
        name: () => `Mr/Ms, ${getPassengerName(str)}, have a nice flight!`,
        flight: () => {
            let airport = getAirport(str);
            return `Your flight number ${getFlightNumber(str)} is from ${airport['from']} to ${airport['to']}.`
        },
        company: () => `Have a nice flight with ${getCompany(str)}.`,
        all: () => {
            let airport = getAirport(str);
            return `Mr/Ms, ${getPassengerName(str)}, your flight number ${getFlightNumber(str)} is from ${airport['from']} to ${airport['to']}. Have a nice flight with ${getCompany(str)}.`
        }
    };

    console.log(commands[command]());

    function getPassengerName(str) {
        let exec = passengerNamePattern.exec(str);
        return exec[0].replace(/-/g, ' ').trim();
    }
    
    function getAirport(srt) {
        let exec = airportPattern.exec(srt);
        return {from: exec[1], to: exec[2]};
    }
    
    function getFlightNumber(str) {
        let exec = flightNumberPattern.exec(str);
        return exec[0].trim();
    }
    
    function getCompany(str) {
        let exec = companyPattern.exec(str);
        return `${exec[1]} ${exec[2]}`;
    }
}

solve('ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ', 'all');