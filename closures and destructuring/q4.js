function cartManager() {
    let cart = [];

    function addToCart(productId, name, quantity, price) {
        const existingItem = cart.find(item => item.productId === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ productId, name, quantity, price });
        }
    }

    function getCartItems() {
        return cart;
    }

    return { addToCart, getCartItems };
}

// Example usage
const cartApp = cartManager();
cartApp.addToCart(1, "Laptop", 1, 55000);
cartApp.addToCart(2, "Phone", 1, 20000);
cartApp.addToCart(1, "Laptop", 2, 55000);
console.log(cartApp.getCartItems());
