function createCart() {
    let cart = [];
    return function getCartItems() {
        return cart;
    };
}

const getCart = createCart();
console.log(getCart()); // []
