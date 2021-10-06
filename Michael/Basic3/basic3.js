"use strict";
let arr = ["aaaa", "bbbb", "cccc", "Hikmet", "Michael", "Serri", "Irati", "Acilio", "9", "10"];
for (let [index, value] of Object.entries(arr)) {
    document.getElementById("indices").innerHTML += `${index}; `;
    document.getElementById("values").innerHTML += `${value}; `;
    document.getElementById("both").innerHTML += `[${index},${value}]; `;
}
