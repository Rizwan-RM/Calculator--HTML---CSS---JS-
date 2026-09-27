const display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function calculate() {
    try {
        
        let expression = display.value
            .replace(/×/g, "*")
            .replace(/÷/g, "/");

       
        display.value = Function(`"use strict"; return (${expression})`)();
    } catch (error) {
        display.value = "Error";
    }
}

function ClearDisplay() {
    display.value = "";
}