// Variables for Display the number and on-off button"
const toggleBtn = document.querySelector("#on-off");
const displayMain = document.getElementById("display-main");
// Maximum number of characters for display
const MAX_CHARS = 10;
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

// Number buttons
const numberButtons = document.querySelectorAll('[data-type="number"]');
numberButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        if(canInput() === false) return; // do nothing as one of conditions is that calculator is off
        if(displayMain.textContent === "0") {
            displayMain.textContent = btn.textContent;
        } else {
        displayMain.textContent += btn.textContent;
    }
    })
})

// Operators
const operators = document.querySelectorAll('[data-type="operator"]');
operators.forEach(btn => {
    btn.addEventListener("click", function() {
        if(isOn === false) return;
        const current = displayMain.textContent;
        const lastChar = current.slice(-1); //removes the last character
        const op = btn.textContent;

         switch (op) {
            case "+":
            case "-":
            case "*":
            case "/":
                if ("+-*/".includes(lastChar)) {
                    displayMain.textContent = current.slice(0, -1) + op;
                } else {
                    displayMain.textContent += op;
                }
                break;
            case "=":
                try {
                    const result = parseFloat(eval(current).toFixed(10));
                    if (isFinite(result) === false) {
                        displayMain.textContent = "Error"; // division by zero
                    } else {
                        displayMain.textContent = String(result).slice(0, MAX_CHARS);
                    }
                } catch (e) {
                    displayMain.textContent = "Error";     // "5+" with nothing after
                }
                break;
        }
    });
});

const resetAll = document.getElementById("reset");
resetAll.addEventListener("click", function() {
    if(isOn === false) return;
    displayMain.textContent = "0";
})




// Decimal button
const decimal = document.querySelectorAll('[data-type="decimal"]');
decimal.forEach(dot => {
    dot.addEventListener("click", function() {
        if (canInput() === false) return;     // added on/off + max chars check

        // Split by operators to get only the number currently being typed
        const parts = displayMain.textContent.split(/[+\-*/]/);
        const currentNumber = parts[parts.length - 1];

        if (currentNumber.includes('.') === false) {  //checks current number only
            const lastChar = displayMain.textContent.slice(-1);
            if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
                displayMain.textContent += "0."; // turn "5+" into "5+0."
            } else {
                displayMain.textContent += ".";
            }
        }
    });
});






