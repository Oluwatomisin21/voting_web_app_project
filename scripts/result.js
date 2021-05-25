// 'use strict'; <

// }
// let results = [{
//         "name": "Domene",
//         "votes": 70,
//     },
//     {sl
//         "name": "Chinobi",
//         "votes": 69,
//     },
//calling 
var candidates = JSON.parse(localStorage.getItem('candidates'));
console.log(candidates[0].votes)

document.getElementById("can-result-1").innerHTML = candidates[0].votes;
document.getElementById("can-result-2").innerHTML = candidates[1].votes;

const votingButtons = document.querySelectorAll('.child-flex2');
console.log(votingButtons)
votingButtons.forEach((element, i) => {
    element.innerHTML = candidates[i].votes;
    console.log(candidates[i].votes)
});

document.querySelector('.button-container').addEventListener('click', function(event) {
    alert('Do you want to export result?');
});
// CODE FOR EXPORTING CSV FILE
function exportTableToCSV(html, filename) {
    var csv = [];
    var rows = document.querySelectorAll("table tr");

    for (var i = 0; i < rows.length; i++) {
        var row = [],
            cols = rows[i].querySelectorAll("td, th");
        for (var j = 0; j < cols.length; j++) {
            row.push(cols[j].innerText);
        }
        csv.push(row.join(","));
    }

    // download csv file
    downloadCSV(csv.join("\n"), filename);
}

function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    if (window.Blob == undefined || window.URL == undefined || window.URL.createObjectURL == undefined) {
        alert("Your browser doesn't support Blobs");
        return;
    }

    csvFile = new Blob([csv], { type: "text/csv" });
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

// converter function

function converter(array) {
    var str = '';
    var header = '';
    array.forEach((element, i) => {
        var line = '';
        for (var index in element) {
            // console.log(index);
            if (i == 0) {
                if (header != '') header += ','
                header += index.toUpperCase();
            }
            if (line != '') line += ',';

            if (element[index] == '') {
                line += null;
            } else {
                line += element[index];
            }
        }
        str += line + '\r\n';
    })
    var arr = `${header}\r\n${str}`;
    return arr;
    // console.log(arr);
}
const elementToChange = document.querySelectorAll('.js-target');
for (let i = 0; i < elementToChange.length; i++) {
    const currentElement = elementsToChange[i];
    currentElement.innerText = "Jesus is Lord!";
}