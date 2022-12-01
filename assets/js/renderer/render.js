import { Canvas } from "./canvas.js";
import { randomInt } from "../random.js";
let canvas = new Canvas("canvas");
const timeout = 100;
setInterval(render, timeout);
let unsortedNumbers = [];
let sortedNumbers = [];
let barWidth = 50;
let gap = 5;
for (let i = 0; i < canvas.getWidth() / (barWidth + gap); i++) {
    unsortedNumbers.push(randomInt(canvas.getHeight()));
}
function render() {
    canvas.clear();
    renderSelectionSort();
}
let currentIteration = 0;
let iterationCounter = 0;
let minIndex = 0;
function renderSelectionSort() {
    let numbers = [];
    for (let i = 0; i < sortedNumbers.length; i++) {
        numbers.push(sortedNumbers[i]);
    }
    for (let i = 0; i < unsortedNumbers.length; i++) {
        numbers.push(unsortedNumbers[i]);
    }
    //console.log(sortedNumbers);
    for (let i = 0; i < numbers.length; i++) {
        let color = "#ffffff";
        if (i == sortedNumbers.length + minIndex) {
            color = "#ffff00";
        }
        if (i == iterationCounter) {
            color = "#ff0000";
        }
        canvas.renderBox(i * (barWidth + gap), canvas.getHeight() - numbers[i], barWidth, numbers[i], color);
    }
    if (currentIteration < unsortedNumbers.length) {
        if (iterationCounter < unsortedNumbers.length) {
            if (unsortedNumbers[iterationCounter] < unsortedNumbers[minIndex]) {
                minIndex = iterationCounter;
            }
            iterationCounter++;
        }
        else {
            console.log("here: " + minIndex);
            sortedNumbers.push(unsortedNumbers[minIndex]);
            unsortedNumbers.splice(minIndex, 1);
            minIndex = 0;
            currentIteration++;
            iterationCounter = currentIteration + 1;
        }
    }
}
//# sourceMappingURL=render.js.map