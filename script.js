const gridContainer = document.querySelector("#grid-container");
const resetButton = document.getElementById("reset-button");
const gridSize = document.getElementById("grid-size");
let defaultGridSize = 25;
let gridWidth = defaultGridSize;
let gridHeight = defaultGridSize;


function askforGridSize() {
    let gridSize = window.prompt("What size grid do you want?", "Please enter a number (1-70)");
    gridSize = parseInt(gridSize, 10);
    if (gridSize === NaN){
        return 25;
    }else if (!(gridSize > 0 && gridSize < 71)){
        return 25;
    }else {
        return gridSize;
    }
}

function addElementsToPage(gridWidth, gridHeight) {    
    let boxNumber = 1;
    for (i = 0; i < gridWidth; i++) {
        for (j = 0; j < gridHeight; j++) {
            let div = document.createElement("div");
            div.classList.add("box");
            div.setAttribute("id", ("box-" + boxNumber));
            gridContainer.appendChild(div);
            boxNumber++;
        }
    }
}

function arrangeGrid(){
    let boxNumber = 1;

    for (let j = 1; j <= gridWidth; j++){
        for (let k = 1; k <= gridHeight; k++){
            let boxNumClass = "#box-" + boxNumber.toString();
            box = document.querySelector(boxNumClass);
            box.style.gridRowStart = k;
            box.style.gridRowEnd = k;
            box.style.gridColumnStart = j;
            box.style.gridColumnEnd = j;
            boxNumber++;
        }
    }
}

function randomNumber(maxNumber){
    let randNum = Math.floor(Math.random() * maxNumber);
    return randNum;
}

function createGrid(gridWidth, gridHeight) {
    addElementsToPage(gridWidth, gridHeight);
    arrangeGrid();
}

function colorBox(box, color) {
    if (color.toLowerCase() === "black"){
        box.style.backgroundColor = "black";
    }else if (color.toLowerCase() === "random"){
        box.style.backgroundColor = getRandomRBG();
    }else if (color.toLowerCase() === "red"){
        box.style.backgroundColor = "red";
    }else if (color.toLowerCase() === "blue"){
        box.style.backgroundColor = "blue";
    }else if (color.toLowerCase() === "green"){
        box.style.backgroundColor = "green";
    }else{
        box.style.backgroundColor = "black";
    }
    
}

function unColorBox(box) {
    box.style.backgroundColor = "white";
}

function getRandomRBG() {
    let red = randomNumber(255);
    let blue = randomNumber(255);
    let green = randomNumber(255);
    return "rgb(" + red + ", " + blue + ", " + green + ")"
}

function setEventListeners (gridWidth, gridHeight, color) {
    for (let i = 1; i <= (gridWidth * gridHeight); i++) {
        let id = "box-" + i;
        let box = document.getElementById(id);
        box.addEventListener("mouseover", function () {
            colorBox(box, color);
        })
    }
}

function resetEventListeners(gridWidth, gridHeight) {
    for (let i = 1; i <= (gridWidth * gridHeight); i++) {
        let id = "box-" + i;
        let box = document.getElementById(id);
        unColorBox(box);
    }
    
    setEventListeners();
}

function setGridSize (size) {
    gridWidth = size;
    gridHeight = size;
}

let gridSizeInt = askforGridSize();
let paintColor = window.prompt("Choose a paint color", "choices are black, red, green, blue, or random");
gridWidth = gridSizeInt;
gridHeight = gridSizeInt;
createGrid(gridWidth, gridHeight);
setEventListeners(gridWidth, gridHeight, paintColor);

resetButton.addEventListener("click", function () {
    resetEventListeners(gridWidth, gridHeight);
});