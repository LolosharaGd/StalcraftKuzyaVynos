// Calculations
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
    newUsiCell.className = "normal-in-cell calcp-usi checkbox";
    newUsiCell.checked = false;

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

// Buyers and sellers
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
    newNckCell.className = "normal-in-cell bnsp-nck small-text";
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
    newNtsCell.className = "wide-in-cell bnsp-nts small-text";
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

// Division
function calculateDivPage() {
    var prfItems = document.getElementsByClassName("divp-prf");

    var totalSum = 0;

    for(var i = 0; i < prfItems.length; i++) {
        totalSum += Number(prfItems[i].value);
    }

    document.getElementById("total-sum").value = String(totalSum);

    var fee = Number(document.getElementById("fee").value);
    var totalSumFee = Math.round(totalSum * (100 - fee) / 100);

    document.getElementById("total-sum-fee").value = String(totalSumFee);

    var prtItems = document.getElementsByClassName("divp-prt");
    var prcItems = document.getElementsByClassName("divp-prc");

    var minPartsCount = Math.min(prtItems.length, prcItems.length);

    
    if(document.getElementById("divp-eqp").checked) {
        for(var i = 0; i < minPartsCount; i++) {
            prtItems[i].value = Math.round(totalSumFee * 100 / minPartsCount / 100)
        }
    } else {
        for(var i = 0; i < minPartsCount; i++) {
            prtItems[i].value = Math.round(totalSumFee * Number(prcItems[i].value) / 100)
        }
    }

    var percTotal = 0;

    for(var i = 0; i < prcItems.length; i++) {
        percTotal += Number(prcItems[i].value);
    }

    document.getElementById("perc-sum").value = percTotal;
}

function addTotalRow() {
    var newItnCell = document.createElement("input");
    newItnCell.type = "text";
    newItnCell.className = "normal-in-cell divp-itn";
    newItnCell.value = "";

    var newPrfCell = document.createElement("input");
    newPrfCell.type = "text";
    newPrfCell.className = "normal-in-cell divp-prf";
    newPrfCell.value = "";

    var lastItn = document.getElementById("last-itn");
    var lastPrf = document.getElementById("last-prf");
    
    document.getElementById("item-names-d").insertBefore(newItnCell, lastItn);
    document.getElementById("profit").insertBefore(newPrfCell, lastPrf);
}

function removeTotalRow() {
    var itnInputs = document.getElementsByClassName("divp-itn");
    var prfInputs = document.getElementsByClassName("divp-prf");

    document.getElementById("item-names-d").removeChild(itnInputs[itnInputs.length - 1]);
    document.getElementById("profit").removeChild(prfInputs[prfInputs.length - 1]);
}

function addPartsRow() {
    var newPrtCell = document.createElement("input");
    newPrtCell.type = "text";
    newPrtCell.className = "normal-out-cell divp-prt";
    newPrtCell.value = "";
    newPrtCell.disabled = true;

    var newPrcCell = document.createElement("input");
    newPrcCell.type = "text";
    newPrcCell.className = "normal-in-cell divp-prc";
    newPrcCell.value = "";

    var lastPrt = document.getElementById("last-prt");
    var lastPrc = document.getElementById("last-prc");
    
    document.getElementById("div-col-1").insertBefore(newPrtCell, lastPrt);
    document.getElementById("div-col-2").insertBefore(newPrcCell, lastPrc);
}

function removePartsRow() {
    var prtInputs = document.getElementsByClassName("divp-prt");
    var prcInputs = document.getElementsByClassName("divp-prc");

    document.getElementById("div-col-1").removeChild(prtInputs[prtInputs.length - 1]);
    document.getElementById("div-col-2").removeChild(prcInputs[prcInputs.length - 1]);
}

// Save and load
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

function globalSaveDivPage() {
    var itnInputs = document.getElementsByClassName("divp-itn");
    var prfInputs = document.getElementsByClassName("divp-prf");
    var prcInputs = document.getElementsByClassName("divp-prc");

    var minElementsCountT = Math.min(itnInputs.length, prfInputs.length);
    var minElementsCountP = Math.min(prcInputs.length);

    var itnItems = [];
    var prfItems = [];
    var prcItems = [];

    for(var i = 0; i < minElementsCountT; i++) {
        itnItems.push(itnInputs[i].value);
        prfItems.push(prfInputs[i].value);
    }

    for(var i = 0; i < minElementsCountP; i++) {
        prcItems.push(prcInputs[i].value);
    }

    var equalChecked = document.getElementById("divp-eqp").checked;
    var fee = document.getElementById("fee").value;

    var divPageData = { len_t: minElementsCountT, len_p: minElementsCountP, itn: itnItems, prf: prfItems, prc: prcItems, eqp: equalChecked, fee: fee };

    console.log(divPageData);
    localStorage.setItem("div", JSON.stringify(divPageData));
}

function globalLoadDivPage() {
    var divPageData = JSON.parse(localStorage.getItem("div"));

    console.log(divPageData);

    for(var i = 0; i < divPageData.len_t; i++) {
        addTotalRow();

        document.getElementsByClassName("divp-itn")[i].value = divPageData.itn[i]
        document.getElementsByClassName("divp-prf")[i].value = divPageData.prf[i]
    }

    for(var i = 0; i < divPageData.len_p; i++) {
        addPartsRow();

        document.getElementsByClassName("divp-prc")[i].value = divPageData.prc[i]
    }

    document.getElementById("divp-eqp").checked = Boolean(divPageData.eqp);
    document.getElementById("fee").value = divPageData.fee;

    calculateDivPage();
}
