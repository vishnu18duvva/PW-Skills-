function cartManagerWithRemove() {
    let cart = [];

    function addToCart(productId, name, quantity, price) {
        const existingItem = cart.find(item => item.productId === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ productId, name, quantity, price });
        }
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.productId !== productId);
    }

    function getCartItems() {
        return cart;
    }

    return { addToCart, removeFromCart, getCartItems };
}

// Example usage
const cartApp2 = cartManagerWithRemove();
cartApp2.addToCart(1, "Laptop", 1, 55000);
cartApp2.addToCart(2, "Phone", 1, 20000);
console.log(cartApp2.getCartItems());
cartApp2.removeFromCart(1);
console.log(cartApp2.getCartItems());
