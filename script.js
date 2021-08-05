//To make the calculator work, we need this script

let tbcal = ""; //value ToBeCalc

const useinp = document.getElementById('useinp');

const compinp = document.getElementById('compout');

//to add value
function calcad(value) { 
    tbcal += value;
    useinp.value = tbcal;
}
 
//to remove value
function removech() { 
    tbcal = tbcal.substring(0, tbcal.length - 1);
    useinp.value = tbcal;
}

//execute
function execm() { 
    if (tbcal.length == 0 || tbcal == "") {
        alert("Needs an input");
        return;
    }
    try {
        ans = eval(tbcal);
        compinp.value = ans;
    }
    catch(err) {
        alert("Invalid input");
    }
}

//to reset
function reset() {
    useinp.value = "";
    compinp.value = "";
    tbcal = "";
}