"use strict";
//tsc -p tsconfig.json --watch
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let val of numbers) {
    document.getElementById("first").innerHTML += `<th>${val}</th>`; // important as HTMLElement!!
}
function row(n) {
    let result = "";
    for (let index = 1; index < 11; index++) {
        result += `<td>${n * index}</td>`;
    }
    return result;
}
for (let val of numbers) {
    document.getElementById("multiplication").innerHTML += `<tr><td>${val}</td>` + row(val) + `</tr>`;
}
