function formatHelper(arr) {
    let str = arr[0];

    str = singleSpaceObligation(str);
    str = singleSpaceBeforeText(str);
    str = replaceSqun(str);
    str = replaceData(str);
    str = trimed(str);
    console.log(str);


    function singleSpaceObligation(str) {
        let pattern = /([\!\?\:\;\.\,])(\s*)*/g;
        str = str.replace(pattern, (allMatch, g1, g2) => g1 + " ");
        return str;
    }

    function singleSpaceBeforeText(str) {
        let pattern = /(\s*)*([\!\?\:\;\.\,])/g;
        str = str.replace(pattern, (allMatch, g1, g2) => g2);
        return str;
    }

    function replaceSqun(str) {
        let pattern = /([.,!?:;]) (?=[.,!?:;])/g;
        str = str.replace(pattern, (allMatch, g1) => g1);
        return str;
    }

    function calculateDots(allMatch, g1, g2) {
        let count = 0;
        for (var i = 0; i < allMatch.length; i++) {
            if (allMatch[i] == ".") {
                count++;
            }
        }
        return ".".repeat(count) + g2
    }

    function replaceData(str) {
        let pattern = /\.\s*([0-9]+)/g;
        str = str.replace(pattern, (allMatch, g1) => "." + g1);
        return str;
    }

    function trimed(str) {
        let pattern = /\"(.*?)\"/g;
        str = str.replace(pattern, (allMatch, g1) => "\"" + g1.trim() + "\"");
        return str;
    }
}
formatHelper(['Terribly formatted text . With chaotic spacings." Terrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .']);