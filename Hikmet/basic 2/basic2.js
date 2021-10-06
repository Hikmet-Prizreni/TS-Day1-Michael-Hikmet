"use strict";
let info = { first: "Hikmet", last: "Prizreni" };
document.write(`My name is ${info.first} ${info.last}`);
let arr = [];
for (let index = 0; index < 10; index++) {
    arr.push(info);
}
arr.forEach(element => {
    document.body.innerHTML += `<h3>${element.first}</h3>`;
});
setTimeout(function lastName() {
    arr.forEach(element => {
        document.body.innerHTML += `<h3>${element.last}</h3>`;
    });
}, 5000);
