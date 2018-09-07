function solve(arr) {
    let pilots = arr.shift().split(/\s+/).filter(a => a !== '');
    let commandor = (() => {
        function Join(pilot) {
            if (pilots.indexOf(pilot) === -1) {
                pilots.push(pilot);
            }
        }
        
        function Crash(pilot) {
            let index = GetPilotIndex(pilot);
            if (index !== -1) {
                pilots.splice(index, 1);
            }
        }
        
        function Pit(pilot) {
            let index = GetPilotIndex(pilot);
            if (index < pilots.length - 1){
                pilots.splice(index, 1);
                pilots.splice(index + 1, 0, pilot);
            }
        }
        
        function Overtake(pilot) {
            let index = GetPilotIndex(pilot);
            if (index > 0){
                pilots.splice(index, 1);
                pilots.splice(index - 1, 0, pilot);
            }
        }

        function GetPilotIndex(pilot) {
            return pilots.indexOf(pilot);
        }

        return {
            Join,
            Crash,
            Pit,
            Overtake
        }
    })();

    for (let element of arr) {
        let tokens = element.split(/\s+/).filter(a => a !== '');
        let command = tokens[0];
        let pilotName = tokens[1];
        commandor[command](pilotName);
    }

    console.log(pilots.join(' ~ '));
}

solve(["Vetel Hamilton Raikonnen Botas Slavi",
    "Pit Hamilton",
    "Overtake LeClerc",
    "Join Ricardo",
    "Crash Botas",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Crash Slavi"]);