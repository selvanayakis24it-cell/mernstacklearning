let products = [];
let editIndex = -1;

// Input Elements
const productName = document.getElementById("product");
const price = document.getElementById("price");
const category = document.getElementById("Electronics");
const stock = document.getElementById("instock");

const addBtn = document.getElementById("addProduct");
const search = document.getElementById("SearchProduct");
const filter = document.getElementById("all");

const sortLow = document.getElementById("p1");
const sortHigh = document.getElementById("p2");

const productContainer = document.getElementById("productContainer");
const totalValue = document.getElementById("totalValue");

// Add / Update Product
addBtn.addEventListener("click", () => {
    if (productName.value === "" || price.value === "") {
        alert("Please fill all fields");
        return;
    }

    let product = {
        name: productName.value,
        price: Number(price.value),
        category: category.value,
        stock: stock.checked ? "In Stock" : "Out of Stock"
    };

    if (editIndex === -1) {
        products.push(product);
    } else {
        products[editIndex] = product;
        editIndex = -1;
        addBtn.innerText = "Add Product";
    }

    clearForm();
    displayProducts(products);
});

// Display Products
function displayProducts(list) {
    productContainer.innerHTML = "";
    let total = 0;

    list.forEach((product, index) => {
        total += product.price;

        productContainer.innerHTML += `
        <div class="third">
            <nav>${product.name}</nav>
            <nav>₨ ${product.price}</nav>
            <nav>${product.category}</nav>
            <nav>${product.stock}</nav>
            <button class="clr1" onclick="editProduct(${index})">Edit</button>
            <button class="clr2" onclick="deleteProduct(${index})">Delete</button>
        </div>
        `;
    });

    totalValue.innerText = total;
}

// Clear Form
function clearForm() {
    productName.value = "";
    price.value = "";
    category.value = "";
    stock.checked = false;
}

// Delete
function deleteProduct(index) {
    products.splice(index, 1);
    displayProducts(products);
}

// Edit
function editProduct(index) {
    let product = products[index];
    productName.value = product.name;
    price.value = product.price;
    category.value = product.category;
    stock.checked = product.stock === "In Stock";

    editIndex = index;
    addBtn.innerText = "Update Product";
}

// Search
search.addEventListener("keyup", () => {
    let text = search.value.toLowerCase();
    let result = products.filter(product =>
        product.name.toLowerCase().includes(text)
    );
    displayProducts(result);
});

// Filter
filter.addEventListener("change", () => {
    if (filter.value === "All") {
        displayProducts(products);
    } else {
        let result = products.filter(product =>
            product.stock === filter.value
        );
        displayProducts(result);
    }
});

// Sort Low → High
sortLow.addEventListener("click", () => {
    let sorted = [...products];
    sorted.sort((a, b) => a.price - b.price);
    displayProducts(sorted);
});

// Sort High → Low
sortHigh.addEventListener("click", () => {
    let sorted = [...products];
    sorted.sort((a, b) => b.price - a.price);
    displayProducts(sorted);
});

// Initial Load
displayProducts(products);
