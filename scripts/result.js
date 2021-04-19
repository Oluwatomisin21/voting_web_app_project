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
// console.log(candidates[0].votes)

// document.getElementById("can-result-1").innerHTML = candidates[0].votes;
// document.getElementById("can-result-2").innerHTML = candidates[1].votes;

const votingButtons = document.querySelectorAll('.child-flex2');
// console.log(votingButtons)
votingButtons.forEach((element, i) => {
    element.innerHTML = candidates[i].votes;
    // console.log(candidates[i].votes)
});

//converter function 
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