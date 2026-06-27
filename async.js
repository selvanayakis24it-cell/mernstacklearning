// setTimeout(() =>{
//     console.log("Running after 3 seconds");
// },3);
// console.log("Running");



// //always the sync will run first
// setTimeout(() =>{
//     console.log("Running after 3 seconds");
// },0);
// console.log("Running");




// //callback hell
// setTimeout(() =>{
//     console.log("Running after 3 seconds");
//     setTimeout(() =>{
//     console.log("Running after 3 seconds");
//     setTimeout(() =>{
//     console.log("Running after 3 seconds");
// },3);
// },3);
// },3);



//promise is to overcome the disatvange of callback hell
let myPromise=new Promise((res,rej) =>{
    let marks=90;//if mark=70 then this will run after the inside async this is call ayncs and await
    if(marks>80){
        res("Now i will give you treat");
    }
    else{
        rej("Now you will get mar");
    }
});
//to run this promise code
//.then and .catch
myPromise.then((msg) =>{
    console.log(msg);
})
.catch((err) =>{
    console.log(err);
});



//async and await
let myFunc = async () => {
    try{
        let val=await myPromise;
        console.log(val);
        console.log("inside async");
    }
    catch(err){
        console.log("inside async");
        console.log(err);
    }
};
myFunc();

let callApi=async() =>{
    try{
        let response=await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(response);
        const data=await response.json();
        console.log(data);
        let ul=document.querySelector("ul");
        
        data.forEach((singleData) =>{
            console.log(singleData.name);
        });
    }
    catch(err){
        console.log("inside async");
        console.log(err);
    }
};
callApi();
