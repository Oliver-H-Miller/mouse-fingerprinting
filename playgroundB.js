function setHTML(id, html) {
  document.getElementById(id).innerHTML = html;
}

function exportDataInCSV(dataObj) {
    let csvStr = "";
    for (let i = 0; i < dataObj.length; i++) {
        let row = `${dataObj[i].deltaY}\n`;
        csvStr += row;
    }
    return csvStr;
}

setHTML('status', 'Hello from playgroundB.js');
const btnCopy = document.getElementById('copy_data');
const html = document.getElementById('html');
// set onMove callback

data = [];
html.onwheel = function (e) {
    console.log(e);
    let eventData = {
        deltaY: e.deltaY,
    };
    data.push(eventData);
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