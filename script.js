const gridContainer = document.querySelector("#grid-container");
const resetButton = document.getElementById("reset-button");
let gridWidth = 24;
let gridHeight = 24;

function addElementsToPage() {    
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

function createGrid() {
    addElementsToPage();
    arrangeGrid();
}

function colorBox(box) {
    box.classList.add("colored");
}

function unColorBox(box) {
    box.classList.remove("colored");
}

function setEventListeners () {
    for (let i = 1; i <= (gridWidth * gridHeight); i++) {
        let id = "box-" + i;
        let box = document.getElementById(id);
        box.addEventListener("mouseover", function () {
            colorBox(box);
        })
    }
}

function resetEventListeners() {
    for (let i = 1; i <= (gridWidth * gridHeight); i++) {
        let id = "box-" + i;
        let box = document.getElementById(id);
        box.addEventListener("mouseover", function () {
            unColorBox(box);
        })
    }
    setEventListeners();
}

createGrid();
setEventListeners();

resetButton.addEventListener("click", resetEventListeners());