function updatePrices() {
    var cppInputs = document.getElementsByClassName("input-cell-cpp");
    var amtInputs = document.getElementsByClassName("input-cell-amt");
    var priOutputs = document.getElementsByClassName("output-cell-pri");
    var usiInputs = document.getElementsByClassName("input-cell-usi");

    var minElementsCount = Math.min(cppInputs.length, amtInputs.length, priOutputs.length, usiInputs.length);

    var totalSum = 0;

    for(var i = 0; i < minElementsCount; i++) {
        priOutputs[i].value = Number(cppInputs[i].value) * Number(amtInputs[i].value);
        if (usiInputs[i].checked)
            totalSum += Number(cppInputs[i].value) * Number(amtInputs[i].value);
    }

    document.getElementById("price-sum").value = totalSum;
}

function addPriceRow() {
    var newItnCell = document.createElement("input");
    newItnCell.type = "text";
    newItnCell.className = "input-cell-itn";
    newItnCell.value = "";

    var newCppCell = document.createElement("input");
    newCppCell.type = "text";
    newCppCell.className = "input-cell-cpp";
    newCppCell.value = "0";

    var newAmtCell = document.createElement("input");
    newAmtCell.type = "text";
    newAmtCell.className = "input-cell-amt";
    newAmtCell.value = "0";
    
    var newPriCell = document.createElement("input");
    newPriCell.disabled = "true";
    newPriCell.className = "output-cell-pri";
    newPriCell.value = "0";

    var newUsiCell = document.createElement("input");
    newUsiCell.type = "checkbox";
    newUsiCell.className = "input-cell-usi";
    newUsiCell.value = "false";

    var lastItn = document.getElementById("last-itn");
    var lastCpp = document.getElementById("last-cpp");
    var lastAmt = document.getElementById("last-amt");
    var lastPri = document.getElementById("last-pri");
    var lastUsi = document.getElementById("last-usi");
    
    document.getElementById("item-names").insertBefore(newItnCell, lastItn);
    document.getElementById("cost-per-piece").insertBefore(newCppCell, lastCpp);
    document.getElementById("amount").insertBefore(newAmtCell, lastAmt);
    document.getElementById("price-for-items").insertBefore(newPriCell, lastPri);
    document.getElementById("use-items").insertBefore(newUsiCell, lastUsi);

    updatePrices();
}

function removePriceRow() {
    var itemNames = document.getElementsByClassName("input-cell-itn");
    var cppInputs = document.getElementsByClassName("input-cell-cpp");
    var amtInputs = document.getElementsByClassName("input-cell-amt");
    var priOutputs = document.getElementsByClassName("output-cell-pri");
    var usiInputs = document.getElementsByClassName("input-cell-usi");

    document.getElementById("item-names").removeChild(itemNames[itemNames.length - 1]);
    document.getElementById("cost-per-piece").removeChild(cppInputs[cppInputs.length - 1]);
    document.getElementById("amount").removeChild(amtInputs[amtInputs.length - 1]);
    document.getElementById("price-for-items").removeChild(priOutputs[priOutputs.length - 1]);
    document.getElementById("use-items").removeChild(usiInputs[usiInputs.length - 1]);
}
