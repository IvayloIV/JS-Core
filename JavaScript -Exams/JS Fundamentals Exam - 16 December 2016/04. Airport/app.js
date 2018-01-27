function airport(arr) {
    let plane = new Set();
    let townStatistic = new Map();
    let townPlanes = new Map();

    for (let currentE of arr) {
        let [planeId, town, passangersCound, action] = currentE.split(/\s+/g);

        passangersCound = Number(passangersCound);
        if (action == "land") {
            if (!plane.has(planeId)) {
                plane.add(planeId);
            } else {
                continue;
            }

            if (!townStatistic.has(town)) {
                townStatistic.set(town, [0, 0]);
            }
            if (!townPlanes.has(town)) {
                townPlanes.set(town, new Set());
            }
            townStatistic.get(town)[0] += passangersCound;
            townPlanes.get(town).add(planeId);
        } else {
            if (plane.has(planeId)) {
                plane.delete(planeId); 
            } else {
                continue;
            }
            if (!townStatistic.has(town)) {
                townStatistic.set(town, [0, 0]);
            }
            if (!townPlanes.has(town)) {
                townPlanes.set(town, new Set());
            }
            townStatistic.get(town)[1] += passangersCound;
            townPlanes.get(town).add(planeId);
        }
    }
    console.log(`Planes left:`);
    for (let currentPlane of [...plane].sort((a, b) => a.localeCompare(b))) {
        console.log(`- ${currentPlane}`);
    }
    let sortTowns = [...townStatistic].sort(mySort);
    for (let town of sortTowns) {
        console.log(town[0]);
        console.log(`Arrivals: ${town[1][0]}`);
        console.log(`Departures: ${town[1][1]}`);
        console.log(`Planes:`);
        let sortedPlanes = [...townPlanes.get(town[0])].sort((a, b) => a.localeCompare(b));
        for (let s of sortedPlanes) {
            console.log(`-- ${s}`);
        }
    }

    function mySort(a, b) {
        let aArrival = a[1][0];
        let bArrival = b[1][0];

        if (aArrival < bArrival) {
            return 1;
        } else if (aArrival > bArrival) {
            return -1;
        } else {
            return a[0].localeCompare(b[0]);
        }
    }
}
airport([
    "Boeing474 Madrid 300 land",
    "AirForceOne WashingtonDC 178 land",
    "Airbus London 265 depart",
    "ATR72 WashingtonDC 272 land",
    "ATR72 Madrid 135 depart"
]);