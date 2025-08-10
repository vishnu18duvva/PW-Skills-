function checkout(cart) {
    if (!Array.isArray(cart) || cart.length === 0) {
        throw new Error("Cart is empty. Add items before checkout.");
    }
    return "Checkout successful!";
}

// Example usage:
const cart = [
    {name: "Book", price: 150, quantity: 2}
];
try {
    console.log(checkout(cart));      // Output: Checkout successful!
    console.log(checkout([]));        // Throws: Cart is empty. Add items before checkout.
} catch (err) {
    console.error(err.message);
}
