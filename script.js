const toggleBtn = document.querySelector("#on-off");
const displayMain = document.getElementById("display-main");


const numberButtons = document.querySelectorAll('[data-type="number"]');
numberButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        if(displayMain.textContent === "0") {
            displayMain.textContent = btn.textContent;
        } else {
        displayMain.textContent += btn.textContent;}
    })
})

const operators = document.querySelectorAll('[data-type="operator"]');
operators.forEach(btn => {
    btn.addEventListener("click", function() {
        displayMain.textContent += btn.textContent;
    })
})

const resetAll = document.getElementById("reset");
resetAll.addEventListener("click", function() {
    displayMain.textContent = "0";
})


// Backspace button 
const backSpace = document.getElementById("backspace");
backSpace.addEventListener("click", deleteLast => {
    displayMain.textContent = displayMain.textContent.slice(0, -1) || "0";
}
)
// On/off button
function onOff() {
    displayMain.textContent = 0;
    if (displayMain.style.display === "none") {
        displayMain.style.display = "block";
        displayMain.textContent = "0";
    } else {
        displayMain.style.display = "none";
    }
}

toggleBtn.addEventListener("click", onOff);

// The display of the dot(decimal) 
const decimal = document.querySelectorAll('[data-type="decimal"]');
decimal.forEach(dot => {
    dot.addEventListener("click", function() {
        if(!displayMain.textContent.includes('.')) {
            displayMain.textContent += ".";
        }
       
    });
});



