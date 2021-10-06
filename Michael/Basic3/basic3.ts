let arr:Array<string>=["aaaa","bbbb","cccc","Hikmet","Michael","Serri","Irati","Acilio","9","10"];
for (let [index,value] of Object.entries(arr)) {
    (document.getElementById("indices")as HTMLElement).innerHTML+=`${index}; `;
    (document.getElementById("values")as HTMLElement).innerHTML+=`${value}; `;
    (document.getElementById("both")as HTMLElement).innerHTML+=`[${index},${value}]; `;
}