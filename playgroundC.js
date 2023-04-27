function setHTML(id, html) {
  document.getElementById(id).innerHTML = html;
}

function exportDataInCSV(dataObj) {
    let csvStr = "";
    // we exclude the first row bc the dT isn't valid
    for (let i = 1; i < dataObj.length; i++) {
        let row = `${dataObj[i].timeStamp}\n`;
        csvStr += row;
    }
    return csvStr;
}

setHTML('status', 'Hello from playgroundC.js');
const btnCopy = document.getElementById('copy_data');
const html = document.getElementById('html');
const scrollMe = document.getElementById('scroll_me');
// set onMove callback

data = [];
prevTimeStamp = 0;
scrollMe.onscroll = function (e) {
    console.log(e);
    let eventData = {
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