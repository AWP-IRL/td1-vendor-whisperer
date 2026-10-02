const sheetId = "1MEN7n9nDtQ4V7D9aSEHdozxyKLbMOV7Q7qlH1EG7JzU";
const sheetName = encodeURIComponent("finalList");
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;
var index = 1;

///Animate & change text
function changeBanner() {
	
    if(currentArray !== JSON.parse(localStorage.getItem("tickers"))){
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

function csvToObjects(csv) {
  const csvRows = csv.split("\n");
  const oneDimArray = csvRows.slice(1);
  let string = JSON.stringify(oneDimArray);
  localStorage.setItem("tickers", string);
}

function handleResponse(csvText) {
  let sheetObjects = csvToObjects(csvText);
  //console.log(sheetObjects);
}

window.onload = function () {

	//fetch Google Sheet data
	fetch(sheetURL)
	  .then((response) => response.text())
	  .then((csvText) => handleResponse(csvText));
	  
    //load text
    var currentArray = [];
        loadLines();
        console.log="Lines loaded";
		
    //Begin display
    var list = document.getElementById('tickerContent').children;
    list[0].className = "showup";
    list[0].hidden = 0;
    console.log="First line shown";
	
    //Rest of the rotation
    if (list.length>=2){
        setInterval(changeBanner, 5000);
    }else{
        console.log="No looping effect";
    }
};

loadLines = function () {
    var linesArray = localStorage.getItem("tickers");
    var readArray = JSON.parse(linesArray);
    currentArray = readArray;
    if(linesArray===null){
        readArray = ["ERROR: no lines saved.","Please change the lines in tickerSet."]
    }
    var area = document.getElementById("tickerContent");
    area.innerHTML = "";
    for (var i = 0; i < readArray.length; i++) {
        area.innerHTML += "<p>" + readArray[i].replace(/\"/g, "") + "</p>";
    
}
}
//auto-reload
window.setTimeout(function() {
	loadLines();
	console.log="Lines auto-reloaded";
}, 5000);