const allButtons = document.querySelectorAll(".button");
const toggleBtn = document.querySelector("#on-off");
const displayMain = document.getElementById("display-main");

const numberButtons = document.querySelectorAll('[data-type="number"]');
numberButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        displayMain.textContent += btn.textContent;
    })
})


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
// allButtons.forEach(button => {
//     button.addEventListener("click", () => 
//     {
//         switch(allButtons) {
//             case jedan:
//                 displayMain.innerHTML == "1";
//             break;
//             case 2:
//                 displayMain.textContent = 2;
//             break;
//             case 3:
//                 displayMain.textContent = 3;
//             break;
//             case 4:
//                 displayMain.textContent = 4;
//             break;
//             case 5:
//                 displayMain.textContent = 5;
//             break;
//             case 6:
//                 displayMain.textContent = 6;
//             break;
//             case 7:
//                 displayMain.textContent = 7;
//             break;
//             case 8:
//                 displayMain.textContent = 8;
//             break;
//             case 9:
//                 displayMain.textContent = 9;
//             break;
//             case 0:
//                 displayMain.textContent = 0;
//             break;
//             default:
//         }
//     })
// })
