const sheetId = "1MEN7n9nDtQ4V7D9aSEHdozxyKLbMOV7Q7qlH1EG7JzU";
const sheetName = encodeURIComponent("finalList");
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

function csvToObjects(csv) {
  const csvRows = csv.split("\n");
  const oneDimArray = csvRows.slice(1);
  let string = JSON.stringify(oneDimArray);
  localStorage.setItem("tickers", string);
}

function handleResponse(csvText) {
  let sheetObjects = csvToObjects(csvText);
  console.log(sheetObjects);
}

fetch(sheetURL)
  .then((response) => response.text())
  .then((csvText) => handleResponse(csvText));