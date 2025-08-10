function addToCart(name, price, quantity) {
    if (!name) {
        throw new Error("Product name is required.");
    }
    if (typeof price !== 'number' || price <= 0) {
        throw new Error("Invalid product price.");
    }
    if (!Number.isInteger(quantity) || quantity <= 0) {
        throw new Error("Invalid quantity.");
    }
    return { name, price, quantity, message: "Product added to cart." };
}

// Example usage:
try {
    console.log(addToCart("Book", 150, 2)); // Output: {name:..., price:..., quantity:..., message:"Product added to cart."}
    console.log(addToCart("", 150, 2));     // Throws: Product name is required.
} catch (err) {
    console.error(err.message);
}
