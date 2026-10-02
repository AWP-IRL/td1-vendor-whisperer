const sheetId = "1MEN7n9nDtQ4V7D9aSEHdozxyKLbMOV7Q7qlH1EG7JzU";
const sheetName = encodeURIComponent("finalList");
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;
var index = 1;

function csvToArray(csv) {
  const csvRows = csv.split("\n");
  const csvArray = csvRows.slice(1);
  //let string = JSON.stringify(csvArray);
  //console.log(csvArray);
}

function gSheetToArray() {
	fetch(sheetURL)
	  .then((response) => response.text())
	  .then((csvText) => csvToArray(csvText));
}

function loadLines() {
    //var linesArray = localStorage.getItem("tickers");
	var linesArray = csvArray;
    var readArray = JSON.parse(linesArray);
    currentArray = readArray;
	console.log(currentArray);
    if(linesArray===null){
        readArray = ["ERROR: no lines saved.","Please change the lines in tickerSet."]
    }
    var area = document.getElementById("tickerContent");
    area.innerHTML = "";
    for (var i = 0; i < readArray.length; i++) {
        area.innerHTML += "<p>" + readArray[i].replace(/\"/g, "") + "</p>";    
	}
	console.log("Lines loaded");
}

///Animate & change text
function changeBanner() {
	
    //if(currentArray !== JSON.parse(localStorage.getItem("tickers"))){
    if(currentArray !== csvRows.slice(1)){
        loadLines();
    }
    var list = document.getElementById('tickerContent').children;
    [].forEach.call(list, function (v, i) {
        ///Show the current item
        list[i].hidden = i !== index;
        if (i == index) {
            list[i].className = "showup";
        }
    });
	
    ///Rotate through the list
    index = (index + 1) % list.length;
}
/*
function myCatchAll() {

	//csv to localStorage
	csvToStorage();
	
    //load text
    var currentArray = [];
	loadLines();
		
    //Begin display
    var list = document.getElementById('tickerContent').children;
    list[0].className = "showup";
    list[0].hidden = 0;
    console.log("First line shown");
	
    //Rest of the rotation
    if (list.length>=2){
        setInterval(changeBanner, 5000);
    }else{
        console.log("No looping effect");
    }
}

//onload
window.onload = myCatchAll();

//auto-reload
window.setTimeout(function(){
	gSheetToArray();
    var currentArray = [];
	loadLines()
}, 10000);
*/

window.onload = gSheetToArray();