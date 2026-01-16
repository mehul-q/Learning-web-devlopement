// Write code for: Product list (name, price) Calculate total price Filter expensive products (logic only)
//  Product list (name, price)
const products = [
  { name: "Laptop", price: 60000 },
  { name: "Mouse", price: 800 },
  { name: "Keyboard", price: 1500 },
  { name: "Headphones", price: 3000 },
  { name: "Monitor", price: 12000 }
];

//  Calculate total price
const totalPrice = products.reduce((total, product) => {
  return total + product.price;
}, 0);

console.log("Total Price:", totalPrice);

//  Filter expensive products (logic only)
const expensiveProducts = products.filter(product => product.price > 5000);

console.log("Expensive Products:", expensiveProducts);
