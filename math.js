const sqrtTargetTextField = document.getElementById("sqrt-input");
const sqrtSeedTextField = document.getElementById("seed-input");
const sqrtResults = document.getElementById("sqrt-results");
const sqrtDecimalAccuracy = document.getElementById("decimalPlaceInput");
const sqrtWidget = document.getElementById("sqrt-widget");

sqrtSeedTextField.value = 1;
sqrtDecimalAccuracy.value = 3;

function calculateAndDisplaySqrt(target) {
    let decimalAccuracy = parseInt(sqrtDecimalAccuracy.value);
    let currentNum = parseFloat(sqrtSeedTextField.value);
    let previousNum = currentNum + 1;
    console.log(currentNum);
    console.log(10 ** (-decimalAccuracy));
    while (Math.abs(currentNum - previousNum) > 10 ** (-decimalAccuracy))
    {
        const newText = document.createTextNode(currentNum);
        const newEntry = document.createElement("li");
        newEntry.appendChild(newText);
        sqrtResults.appendChild(newEntry);
        previousNum = currentNum;
        currentNum = (currentNum + target / currentNum) / 2;
        console.log(currentNum);
    }
}

sqrtWidget.addEventListener("keyup", function onEvent(e) {
    if (e.key == 'Enter') {
        sqrtResults.innerHTML = "";
        if (sqrtTargetTextField.value != "") {
            calculateAndDisplaySqrt(sqrtTargetTextField.value);
        }
    }
});