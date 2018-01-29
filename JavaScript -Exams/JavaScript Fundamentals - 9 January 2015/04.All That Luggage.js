function solve(arr) {
    let book = new Map();

    let sortName = arr.pop();
    for(let element of arr){
        let elementTokens = /(.*?)[\.]*\*[\.]*(.*?)[\.]*\*[\.]*(.*?)[\.]*\*[\.]*(.*?)[\.]*\*[\.]*(.*?)[\.]*\*[\.]*(.*?)[\.]*\*[\.]*(.*?)$/.exec(element);
        let ownerName = elementTokens[1];
        let luggageName = elementTokens[2];
        let isFood = elementTokens[3];
        let isDring = elementTokens[4];
        let isFragile = elementTokens[5];
        let kg = Number(elementTokens[6]);
        let transferWith = elementTokens[7];

        if (!book.has(ownerName)){
            book.set(ownerName, new Map());
        }
        if (!book.get(ownerName).has(luggageName)){
            book.get(ownerName).set(luggageName, ["", "", 0, ""]);
        }
        let type = "";
        if (isFood === "true"){
            type = "food";
        } else if (isDring === "true"){
            type = "drink";
        } else {
            type = "other";
        }
        book.get(ownerName).get(luggageName)[0] = type;
        book.get(ownerName).get(luggageName)[1] = isFragile;
        book.get(ownerName).get(luggageName)[2] = kg;
        book.get(ownerName).get(luggageName)[3] = transferWith;
    }

    let output = {};
    for(let currentOwner of [...book]){
        output[currentOwner[0]] = {};
        let sortingLuggage = [...currentOwner[1]].sort(mySort);
        for(let curretLuggage of sortingLuggage){
            output[currentOwner[0]][curretLuggage[0]] = {"kg":curretLuggage[1][2],"fragile":curretLuggage[1][1],"type":curretLuggage[1][0],"transferredWith":curretLuggage[1][3]};
        }
    }
    console.log(JSON.stringify(output));

    function mySort(a, b){
        let firstName = a[0];
        let secoundName = b[0];
        let firstLuggageType = a[1]; 
        let secondLuggageType = b[1]; 

        if (sortName == "luggage name"){
            return firstName.localeCompare(secoundName);
        } else if (sortName == "weight"){
            if (firstLuggageType[2] < secondLuggageType[2]){
                return -1;
            } else if (firstLuggageType[2] > secondLuggageType[2]){
                return 1;
            } 
        }
        return 0;
    }
}
solve([`Yana Slavcheva*....clothes*....false*....false*....false*....2.2*....backpack`,
`Kiko*....socks*....false*....false*....false*....0.2*....backpack`,
`Kiko*....sticks*....false*....false*....false*....1.6*....ATV`,
`Kiko*....sheets*....false*....false*....false*....3.6*....backpack`,
`Kiko*....banana*....true*....false*....false*....3.2*....backpack`,
`Kiko*....glasses*....false*....false*....true*....0.2*....ATV`,
`Kiko*....glasses*....false*....false*....true*....3*....ATV`,
`Manov*....socks*....false*....false*....false*....0.3*....ATV`,
`luggage name`]);