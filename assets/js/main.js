function updatePrices() {
    var cppInputs = document.getElementsByClassName("calcp-cpp");
    var amtInputs = document.getElementsByClassName("calcp-amt");
    var priOutputs = document.getElementsByClassName("calcp-pri");
    var usiInputs = document.getElementsByClassName("calcp-usi");

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
    newItnCell.className = "normal-in-cell calcp-itn";
    newItnCell.value = "";

    var newCppCell = document.createElement("input");
    newCppCell.type = "text";
    newCppCell.className = "normal-in-cell calcp-cpp";
    newCppCell.value = "0";

    var newAmtCell = document.createElement("input");
    newAmtCell.type = "text";
    newAmtCell.className = "normal-in-cell calcp-amt";
    newAmtCell.value = "0";
    
    var newPriCell = document.createElement("input");
    newPriCell.disabled = "true";
    newPriCell.className = "normal-out-cell calcp-pri";
    newPriCell.value = "0";

    var newUsiCell = document.createElement("input");
    newUsiCell.type = "checkbox";
    newUsiCell.className = "normal-in-cell calcp-usi";
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
    var itemNames = document.getElementsByClassName("calcp-itn");
    var cppInputs = document.getElementsByClassName("calcp-cpp");
    var amtInputs = document.getElementsByClassName("calcp-amt");
    var priOutputs = document.getElementsByClassName("calcp-pri");
    var usiInputs = document.getElementsByClassName("calcp-usi");

    document.getElementById("item-names").removeChild(itemNames[itemNames.length - 1]);
    document.getElementById("cost-per-piece").removeChild(cppInputs[cppInputs.length - 1]);
    document.getElementById("amount").removeChild(amtInputs[amtInputs.length - 1]);
    document.getElementById("price-for-items").removeChild(priOutputs[priOutputs.length - 1]);
    document.getElementById("use-items").removeChild(usiInputs[usiInputs.length - 1]);
}

function bnsTypeButtonSwitch(el) {
    if(el.innerHTML == "Скупщик") {
        el.innerHTML = "Продавец";
    } else {
        el.innerHTML = "Скупщик";
    }
}

function addBNSRow() {
    var newTypCell = document.createElement("button");
    newTypCell.className = "normal-button bnsp-typ";
    newTypCell.innerHTML = "Скупщик"
    newTypCell.addEventListener(
        "click",
        function() {
            bnsTypeButtonSwitch(this);
            globalSaveBNSPage();
        }
    );

    var newNckCell = document.createElement("input");
    newNckCell.type = "text";
    newNckCell.className = "normal-in-cell bnsp-nck";
    newNckCell.value = "";

    var newScaCell = document.createElement("input");
    newScaCell.type = "number";
    newScaCell.className = "normal-in-cell bnsp-sca";
    newScaCell.value = "";

    var newSctCell = document.createElement("input");
    newSctCell.type = "number";
    newSctCell.className = "normal-in-cell bnsp-sct";
    newSctCell.value = "";
    
    var newTruCell = document.createElement("input");
    newTruCell.type = "text";
    newTruCell.className = "normal-in-cell bnsp-tru";
    newTruCell.value = "";

    var newNtsCell = document.createElement("input");
    newNtsCell.type = "text";
    newNtsCell.className = "wide-in-cell bnsp-nts";
    newNtsCell.value = "";

    var lastTyp = document.getElementById("last-typ");
    var lastNck = document.getElementById("last-nck");
    var lastSca = document.getElementById("last-sca");
    var lastSct = document.getElementById("last-sct");
    var lastTru = document.getElementById("last-tru");
    var lastNts = document.getElementById("last-nts");
    
    document.getElementById("bns-type").insertBefore(newTypCell, lastTyp);
    document.getElementById("nicknames").insertBefore(newNckCell, lastNck);
    document.getElementById("scam-attempts").insertBefore(newScaCell, lastSca);
    document.getElementById("succesful-trades").insertBefore(newSctCell, lastSct);
    document.getElementById("trust").insertBefore(newTruCell, lastTru);
    document.getElementById("notes").insertBefore(newNtsCell, lastNts);
}

function removeBNSRow() {
    var typInputs = document.getElementsByClassName("bnsp-typ");
    var nckInputs = document.getElementsByClassName("bnsp-nck");
    var scaInputs = document.getElementsByClassName("bnsp-sca");
    var sctInputs = document.getElementsByClassName("bnsp-sct");
    var truInputs = document.getElementsByClassName("bnsp-tru");
    var ntsInputs = document.getElementsByClassName("bnsp-nts");

    document.getElementById("bns-type").removeChild(typInputs[typInputs.length - 1]);
    document.getElementById("nicknames").removeChild(nckInputs[nckInputs.length - 1]);
    document.getElementById("scam-attempts").removeChild(scaInputs[scaInputs.length - 1]);
    document.getElementById("succesful-trades").removeChild(sctInputs[sctInputs.length - 1]);
    document.getElementById("trust").removeChild(truInputs[truInputs.length - 1]);
    document.getElementById("notes").removeChild(ntsInputs[ntsInputs.length - 1]);
}

function globalSaveCalcPage() {
    var itnInputs = document.getElementsByClassName("calcp-itn");
    var cppInputs = document.getElementsByClassName("calcp-cpp");
    var amtInputs = document.getElementsByClassName("calcp-amt");
    var usiInputs = document.getElementsByClassName("calcp-usi");

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

    //console.log(calcPageData);
    localStorage.setItem("calc", JSON.stringify(calcPageData));
}

function globalLoadCalcPage() {
    var calcPageData = JSON.parse(localStorage.getItem("calc"));

    //console.log(calcPageData);

    for(var i = 0; i < calcPageData.len; i++) {
        addPriceRow();

        document.getElementsByClassName("calcp-itn")[i].value = calcPageData.itn[i]
        document.getElementsByClassName("calcp-cpp")[i].value = calcPageData.cpp[i]
        document.getElementsByClassName("calcp-amt")[i].value = calcPageData.amt[i]
        document.getElementsByClassName("calcp-usi")[i].checked = Boolean(calcPageData.usi[i]);
    }
}

function globalSaveBNSPage() {
    var typInputs = document.getElementsByClassName("bnsp-typ");
    var nckInputs = document.getElementsByClassName("bnsp-nck");
    var scaInputs = document.getElementsByClassName("bnsp-sca");
    var sctInputs = document.getElementsByClassName("bnsp-sct");
    var truInputs = document.getElementsByClassName("bnsp-tru");
    var ntsInputs = document.getElementsByClassName("bnsp-nts");

    var minElementsCount = Math.min(typInputs.length, nckInputs.length, scaInputs.length, sctInputs.length, truInputs.length, ntsInputs.length);

    var typItems = [];
    var nckItems = [];
    var scaItems = [];
    var sctItems = [];
    var truItems = [];
    var ntsItems = [];

    for(var i = 0; i < minElementsCount; i++) {
        typItems.push(typInputs[i].innerHTML);
        nckItems.push(nckInputs[i].value);
        scaItems.push(scaInputs[i].value);
        sctItems.push(sctInputs[i].value);
        truItems.push(truInputs[i].value);
        ntsItems.push(ntsInputs[i].value);
    }

    var bnsPageData = { len: minElementsCount, typ: typItems, nck: nckItems, sca: scaItems, sct: sctItems, tru: truItems, nts: ntsItems };

    //console.log(bnsPageData);
    localStorage.setItem("bns", JSON.stringify(bnsPageData));
}

function globalLoadBNSPage() {
    var bnsPageData = JSON.parse(localStorage.getItem("bns"));

    //console.log(bnsPageData);

    for(var i = 0; i < bnsPageData.len; i++) {
        addBNSRow();

        document.getElementsByClassName("bnsp-typ")[i].innerHTML = bnsPageData.typ[i]
        document.getElementsByClassName("bnsp-nck")[i].value = bnsPageData.nck[i]
        document.getElementsByClassName("bnsp-sca")[i].value = Number(bnsPageData.sca[i])
        document.getElementsByClassName("bnsp-sct")[i].value = Number(bnsPageData.sct[i])
        document.getElementsByClassName("bnsp-tru")[i].value = bnsPageData.tru[i]
        document.getElementsByClassName("bnsp-nts")[i].value = bnsPageData.nts[i]
    }
}
