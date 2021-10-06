let info:{first:string,last:string}={first:"Hikmet",last:"Prizreni"};
document.write(`My name is ${info.first} ${info.last}`);
let arr:Array<{first:string, last:string}>=[];
for (let index = 0; index < 10; index++) {
    arr.push(info);    
}
arr.forEach(element => {
    document.body.innerHTML+=`<h3>${element.first}</h3>`;
});
setTimeout(function lastName() {
    arr.forEach(element => {
        document.body.innerHTML+=`<h3>${element.last}</h3>`;   
    });
    
},5000);