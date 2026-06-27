//Tag selector

let tagselector=document.getElementsByTagName("h1");
//an array of type HTMcollection 
console.log(tagselector[1]);

//Class selector
let classselector=document.getElementsByClassName("b");
//an array type HTMcollection
console.log(classselector[1]);

//id selector
let idselector=document.getElementById("a");
//display the first value
console.log(idselector);

//querySelector
let a=document.querySelector("#a");//id
// let a=document.querySelector("h1");//tag
// let a=document.querySelector(".a");//class
console.log(a);

//QuerySelectorAll
let b=document.querySelectorAll(".b");
//array type of Nodelist
console.log(b);


const div=document.querySelector("div");
console.log(div);

console.log(div.textContent);
console.log(div.innerHTML);

let aa=document.querySelector("#a");
console.log(aa);
aa.textContent="Hello World";
aa.innerHTML="<b>dfdf</b>";

//add / remove / togle
 
aa.classList.add("c");
aa.classList.remove("c");
aa.classList.toggle("c");


let arr=["Hello","World","Selva"];
let list=document.createElement("ul");
let li1=document.createElement("li");
li1.textContent=arr[0];
list.appendChild(li1);
let li2=document.createElement("li");
li2.textContent=arr[1];
list.appendChild(li2);
let li3=document.createElement("li");
li3.textContent=arr[2];
list.appendChild(li3);
document.body.appendChild(list);
