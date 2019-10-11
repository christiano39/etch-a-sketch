const gridContainer = document.querySelector("#grid-container");
const resetButton = document.getElementById("reset-button");
const gridSize = document.getElementById("grid-size");
let defaultGridSize = 25;
let gridWidth = defaultGridSize;
let gridHeight = defaultGridSize;


function askforGridSize() {
    let gridSize = window.prompt("What size grid do you want?", "Please enter a number (1-60)");
    gridSize = parseInt(gridSize, 10);
    console.log(gridSize);
    console.log(typeof gridSize);
    if (gridSize === NaN){
        return 25;
    }else if (!(gridSize > 0 && gridSize < 61)){
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
            //div.classList.add("box-" + boxNumber);
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

function createGrid(gridWidth, gridHeight) {
    addElementsToPage(gridWidth, gridHeight);
    arrangeGrid();
}

function colorBox(box) {
    box.classList.add("colored");
}

function unColorBox(box) {
    box.classList.remove("colored");
}

function setEventListeners (gridWidth, gridHeight) {
    for (let i = 1; i <= (gridWidth * gridHeight); i++) {
        let id = "box-" + i;
        let box = document.getElementById(id);
        box.addEventListener("mouseover", function () {
            colorBox(box);
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
gridWidth = gridSizeInt;
gridHeight = gridSizeInt;
createGrid(gridWidth, gridHeight);
setEventListeners(gridWidth, gridHeight);

resetButton.addEventListener("click", function () {
    resetEventListeners(gridWidth, gridHeight);
});

