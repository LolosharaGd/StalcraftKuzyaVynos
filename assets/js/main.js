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

function addBNSRow() {
    var newNckCell = document.createElement("input");
    newNckCell.type = "text";
    newNckCell.className = "input-cell-nck";
    newNckCell.value = "";

    var newScaCell = document.createElement("input");
    newScaCell.type = "number";
    newScaCell.className = "input-cell-sca";
    newScaCell.value = "";

    var newSctCell = document.createElement("input");
    newSctCell.type = "number";
    newSctCell.className = "input-cell-sct";
    newSctCell.value = "";
    
    var newTruCell = document.createElement("input");
    newTruCell.type = "number";
    newTruCell.className = "input-cell-tru";
    newTruCell.value = "";

    var newNtsCell = document.createElement("input");
    newNtsCell.type = "text";
    newNtsCell.className = "input-cell-nts";
    newNtsCell.value = "";

    var lastNck = document.getElementById("last-nck");
    var lastSca = document.getElementById("last-sca");
    var lastSct = document.getElementById("last-sct");
    var lastTru = document.getElementById("last-tru");
    var lastNts = document.getElementById("last-nts");
    
    document.getElementById("nicknames").insertBefore(newNckCell, lastNck);
    document.getElementById("scam-attempts").insertBefore(newScaCell, lastSca);
    document.getElementById("succesful-trades").insertBefore(newSctCell, lastSct);
    document.getElementById("trust").insertBefore(newTruCell, lastTru);
    document.getElementById("notes").insertBefore(newNtsCell, lastNts);
}

function removeBNSRow() {
    var nckInputs = document.getElementsByClassName("input-cell-nck");
    var scaInputs = document.getElementsByClassName("input-cell-sca");
    var sctInputs = document.getElementsByClassName("input-cell-sct");
    var truInputs = document.getElementsByClassName("input-cell-tru");
    var ntsInputs = document.getElementsByClassName("input-cell-nts");

    document.getElementById("nicknames").removeChild(nckInputs[nckInputs.length - 1]);
    document.getElementById("scam-attempts").removeChild(scaInputs[scaInputs.length - 1]);
    document.getElementById("succesful-trades").removeChild(sctInputs[sctInputs.length - 1]);
    document.getElementById("trust").removeChild(truInputs[truInputs.length - 1]);
    document.getElementById("notes").removeChild(ntsInputs[ntsInputs.length - 1]);
}

function globalSaveCalcPage() {
    var itnInputs = document.getElementsByClassName("input-cell-itn");
    var cppInputs = document.getElementsByClassName("input-cell-cpp");
    var amtInputs = document.getElementsByClassName("input-cell-amt");
    var usiInputs = document.getElementsByClassName("input-cell-usi");

    var minElementsCount = Math.min(itnInputs.length, cppInputs.length, amtInputs.length, usiInputs.length);

    var itnItems = [];
    var cppItems = [];
    var amtItems = [];
    var usiItems = [];

    for(var i = 0; i < minElementsCount; i++) {
        itnItems.push(itnInputs[i].value);
        cppItems.push(cppInputs[i].value);
        amtItems.push(amtInputs[i].value);
        usiItems.push(usiInputs[i].checked);
    }

    var calcPageData = { len: minElementsCount, itn: itnItems, cpp: cppItems, amt: amtItems, usi: usiItems };

    console.log(calcPageData);
    localStorage.setItem("calc", JSON.stringify(calcPageData));
}

function globalLoadCalcPage() {
    var calcPageData = JSON.parse(localStorage.getItem("calc"));

    console.log(calcPageData);

    for(var i = 0; i < calcPageData.len; i++) {
        addPriceRow();

        document.getElementsByClassName("input-cell-itn")[i].value = calcPageData.itn[i]
        document.getElementsByClassName("input-cell-cpp")[i].value = calcPageData.cpp[i]
        document.getElementsByClassName("input-cell-amt")[i].value = calcPageData.amt[i]
        document.getElementsByClassName("input-cell-usi")[i].checked = Boolean(calcPageData.usi[i]);
    }

    removePriceRow();
}
