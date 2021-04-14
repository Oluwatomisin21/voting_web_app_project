// 'use strict'; <

// }
// let results = [{
//         "name": "Domene",
//         "votes": 70,
//     },
//     {
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