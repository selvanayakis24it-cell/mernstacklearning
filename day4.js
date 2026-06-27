let btn=document.querySelector("button");
let div=document.querySelector("div");

btn.addEventListener("click",() => {
    div.classList.toggle("change");
});

const form=document.querySelector("#myForm");
const tablebody=document.querySelector("#tbody");

form.addEventListener("submit",(e) => {
    e.preventDefault();

    const name=document.querySelector("#name").value;
    const email=document.querySelector("#email").value;
    const number=document.querySelector("#num").value;
    console.log(name,email,number);
    const tr=document.createElement("tr");
    tr.innerHTML=`<td>${name}</td>
    <td>${email}</td>
    <td>${number}</td>`;
    tablebody.appendChild(tr);
    form.reset();
});