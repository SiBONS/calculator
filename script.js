// Variables for Display the number and on-off button"
const toggleBtn = document.querySelector("#on-off");
const displayMain = document.getElementById("display-main");
// Maximum number of characters for display
const MAX_CHARS = 15;
let isOn = false;

// We have two conditions here. The calculator is off and there are max characters that does not allow
//to be typed
function canInput() {
    if(isOn === false) {
        return false; // calculator is off ignore the buttons
    }
    if(displayMain.textContent.length >= MAX_CHARS) {
        return false; // display is full ignore the button
    }
    return true;
}



function onOff() {
    if (!isOn) {
        displayMain.style.display = "block";
        displayMain.textContent = "0";
         document.getElementById("display").style.backgroundColor ="green";
         isOn = true;
    } else {
        displayMain.style.display = "none";
        displayMain.style.backgroundColor = "";
         document.getElementById("display").style.backgroundColor ="rgb(41, 40, 40)";
        isOn = false;
        
    }
}

toggleBtn.addEventListener("click", onOff);

// Backspace button 
const backSpace = document.getElementById("backspace");
backSpace.addEventListener("click", deleteLast => {
    if(isOn === false) return;
    displayMain.textContent = displayMain.textContent.slice(0, -1) || "0";
}
)


const numberButtons = document.querySelectorAll('[data-type="number"]');
numberButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        if(canInput() === false) {
            return; // do nothing as one of conditions is that calculator is off
        }
        if(displayMain.textContent === "0") {
            displayMain.textContent = btn.textContent;
        } else {
        displayMain.textContent += btn.textContent;
    }
    })
})

const operators = document.querySelectorAll('[data-type="operator"]');
operators.forEach(btn => {
    btn.addEventListener("click", function() {
        const current = displayMain.textContent;
        const lastChar = current.slice(-1); //removes the last character
        const op = btn.textContent;

        switch(op) {
            case "+":
            case "-":
            case "*":
            case "/":
                // Prevent double operators like "5++", "3*-"
                if ("+-*/".includes(lastChar)) { // Identifies if the specific sequence of characters exists anywhere in the string
                    displayMain.textContent = current.slice(0, -1) + op;
                } else {
                    displayMain.textContent += op;
                }
                break;
                case "=":
                displayMain.textContent = parseFloat(eval(displayMain.textContent).toFixed(2));
                //parseFloat transforms to integer, toFixed rounds to two decimals
                break;
                default:
                break;
        }
    });
});


const resetAll = document.getElementById("reset");
resetAll.addEventListener("click", function() {
    if(isOn === false) return;
    displayMain.textContent = "0";
})





// The display of the dot(decimal) 
const decimal = document.querySelectorAll('[data-type="decimal"]');
decimal.forEach(dot => {
    dot.addEventListener("click", function() {
        if(!displayMain.textContent.includes('.')) { // the condition where decimal can only type in once
            displayMain.textContent += ".";
        }
       
    });
});


// On/off button





