// Filter by Category.
function createCategoryFilter(products) {
    return function(category) {
        return products.filter(product => product.category === category);
    };
}

// Example usage:
const productsArray = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" }
];

const filterByCategory = createCategoryFilter(productsArray);

const electronicsProducts = filterByCategory("Clothing");

console.log(electronicsProducts);

