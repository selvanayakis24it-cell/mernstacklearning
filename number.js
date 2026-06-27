let a=10;
console.log(a);
console.log(typeof(a));
a="shibi";
console.log(typeof(a));
//see this is called loosely coupled
let square=(parameter) =>{
    console.log(parameter*parameter);
};
square(20);
//parameter is the variable  and argument is the value

//this parameter is default 
//if i not supposed to give the argument it will take the default value i have declared and make that value to run that code
let squ=(parameter=30) =>{
    console.log(parameter*parameter);
    console.log(`my value is ${parameter} and the square number is ${parameter*parameter}`)
};
squ();
squ(3);


//only the + operator will concatenate
//other will display the value 
//this is called type conversion
console.log(2+"2");
console.log(20-"2");//it will not give error
console.log(2=="2");//it will compare only the value not the data type
console.log(2==="2");//it will compare both value and data type

//Array 
//In javascript array is not a collection of same data type
let arr=[1,2,3];
console.log(arr);
let arr1=[1,2,3,"hii"];
console.log(arr1);//heree the array consist of differnt datatypes



//using const key we can chagee the length of the array....
const arr2=[1,2,3];
console.log(arr2);
arr2.push(34);
//here no error because we are not redeclaring the value
console.log(arr2);
//arr2=[0,9];this will show error
//console.log(arr2);



//unshift is used to add the element at the begning
arr2.unshift(80);
console.log(arr2);

//shift to used to remove the element at front
arr2.shift();
console.log(arr2);


//used to remove the element at the last
arr2.pop();
console.log(arr2);

//Array in iteration
let selva=[1,2,3,4,5];
for(let i=0;i<selva.length;i++){
    console.log(selva[i]);
    selva[i]=selva[i]+i;
}
console.log(selva);//for loop will change the original array

//these function will not change the original array
//map function
//reduce function
//filter function

let ar=[1,2,3,4,5];
let order=ar.filter((curr,index)=>{
    console.log(curr,index);
    return curr%2==1;    
})
.map((c,i)=>{
    return c+10;
});
console.log(order);