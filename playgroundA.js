function setHTML(id, html) {
  document.getElementById(id).innerHTML = html;
}

function exportDataInCSV(dataObj) {
    let csvStr = "";
    // we exclude the first row bc the dT isn't valid
    for (let i = 1; i < dataObj.length; i++) {
        let row = `${dataObj[i].timeStamp},${dataObj[i].movementX},${dataObj[i].movementY}\n`;
        csvStr += row;
    }
    return csvStr;
}

setHTML('status', 'Hello from playgroundA.js');
const btnCopy = document.getElementById('copy_data');
const html = document.getElementById('html');
// set onMove callback

data = [];
prevTimeStamp = 0;
html.onmousemove = function (e) {
    setHTML('status', `Position: ${e.clientX}, ${e.clientY}`);
    console.log(e);
    let eventData = {
        movementX: e.movementX,
        movementY: e.movementY,
        timeStamp: e.timeStamp - prevTimeStamp,
    };
    data.push(eventData);
    prevTimeStamp = e.timeStamp;
}

btnCopy.onclick = function () {
    let csvStr = exportDataInCSV(data);
    console.log(csvStr);
    navigator.clipboard.writeText(csvStr);
    setHTML('copy_data', 'Data copied to clipboard!');
    setTimeout(() => {
        setHTML('copy_data', 'Copy Data (CSV) to clipboard');
    }, 1000);
}