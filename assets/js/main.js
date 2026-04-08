function updatePrices() {
    var cppInputs = document.getElementsByClassName("input-cell-cpp");
    var amtInputs = document.getElementsByClassName("input-cell-amt");
    var priOutputs = document.getElementsByClassName("output-cell-pri");

    var minElementsCount = Math.min(cppInputs.length, amtInputs.length, priOutputs.length);

    var totalSum = 0;

    for(var i = 0; i < minElementsCount; i++) {
        priOutputs[i].value = Number(cppInputs[i].value) * Number(amtInputs[i].value);
        totalSum += Number(cppInputs[i].value) * Number(amtInputs[i].value);
    }

    document.getElementById("price-sum").value = totalSum;
}

function addPriceRow() {
    var newCppCell = document.createElement("input");
    newCppCell.type = "text";
    newCppCell.className = "input-cell-cpp";

    var newAmtCell = document.createElement("input");
    newAmtCell.type = "text";
    newAmtCell.className = "input-cell-amt";

    var newPriCell = document.createElement("input");
    newPriCell.disabled = "true";
    newPriCell.className = "output-cell-pri";

    var priSumText = document.getElementById("pri-sum-text");

    document.insertBefore(newCppCell, priSumText);
    document.insertBefore(newAmtCell, priSumText);
    document.insertBefore(newPriCell, priSumText);
}
