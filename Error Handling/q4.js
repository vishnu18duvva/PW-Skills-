function isValidCardNumber(cardNumber) {
    // Simple regex and length check for demonstration (Visa/Mastercard: 16 digits)
    return typeof cardNumber === 'string' && /^\d{16}$/.test(cardNumber);
}

function isValidExpiry(expiryDate) {
    if (!expiryDate) return false;
    const [year, month] = expiryDate.split('-').map(Number);
    const currentDate = new Date();
    const expiry = new Date(year, month - 1);
    return expiry > currentDate;
}

function processPayment(amount, cardNumber, expirationDate) {
    if (typeof amount !== 'number' || amount <= 0) {
        throw new Error("Invalid payment amount.");
    }
    if (!isValidCardNumber(cardNumber)) {
        throw new Error("Invalid card number.");
    }
    if (!isValidExpiry(expirationDate)) {
        throw new Error("Invalid expiration date.");
    }
    return "Payment processed successfully!";
}

// Example usage:
try {
    console.log(processPayment(250, "4111111111111111", "2026-05")); // Output: Payment processed successfully!
    console.log(processPayment(0, "4111111111111111", "2026-05"));   // Throws: Invalid payment amount.
} catch (err) {
    console.error(err.message);
}
