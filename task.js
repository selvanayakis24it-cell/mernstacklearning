const products = [
  {
    id: 1,
    name: "Laptop",
    price: 60000,
    category: "Electronics",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 2,
    name: "Mobile",
    price: 20000,
    category: "Electronics",
    rating: 4.2,
    inStock: false,
  },
  {
    id: 3,
    name: "Shoes",
    price: 3000,
    category: "Fashion",
    rating: 4.0,
    inStock: true,
  },
  {
    id: 4,
    name: "Watch",
    price: 5000,
    category: "Fashion",
    rating: 3.8,
    inStock: true,
  },
  {
    id: 5,
    name: "Headphones",
    price: 2500,
    category: "Electronics",
    rating: 4.3,
    inStock: true,
  },
  {
    id: 6,
    name: "T-shirt",
    price: 1000,
    category: "Fashion",
    rating: 3.5,
    inStock: false,
  },
];


// 1. Get all product names using map.
let p=products.map((product) => {
    return product.name;
});
console.log(p);


// 2. Get only prices using map.
let pr=products.map((product) => {
    return product.price;
});
console.log(pr);


// 3. Add 10% tax to each product price using map.
let t=products.map((product) => {
    return tax=product.price*0.1+product.price;
});
console.log(t);


// 4. Get products that are in stock using filter.
let s=products.filter((product) => {
     return product.inStock;
});
console.log(s);


// 5. Get products with price greater than 5000 using filter.
let g=products.filter((product) =>{
    return product.price>5000;
});
console.log(g);


// 6. Get names of all Electronics products using filter + map.
let e=products.filter((product) =>{
    return product.category=="Electronics";
}).map((product)=>{
    return product.name;
});
console.log(e); 



// 7. Get total price of all products using reduce.
let tp=products.reduce((acc,product)=>{
    return acc+product.price;
},0);
console.log(tp);



// 8. Get total price of only in-stock products using filter + reduce.
let isp=products.filter((product)=>{
    return product.inStock;
}).reduce((acc,product)=>{
    return acc+product.price;
},0);
console.log(isp);



// 9. Get average rating of all products using reduce.
let ar=products.reduce((acc,product)=>{
    return acc+product.rating;
},0)/products.length;
console.log(ar);        


// 10. Convert products into format: 'Name - Price' using map.

let f=products.map(product =>{
    return `${product.name} - ${product.price}`;
})
console.log(f);



// 11. Count how many products are in each category using reduce.
let c=products.reduce((acc,product)=> acc+1,0);
console.log(c);




// 12. Find the most expensive product using reduce.
// 13. Get total price category-wise using reduce.
// 14. Get only names of products with rating above 4 using filter + map.
// 15. Check if all products are in stock using reduce or every.
// 16. Create a cart total with discount (if total > 50000 apply 10%) using reduce.
// 17. Group products by category using reduce.
// 18. Get the product with highest rating in each category.
// 19. Get total stock value using reduce.
// 20. Get total price of in-stock Electronics products using chaining.z