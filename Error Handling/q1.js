function login(username, password) {
    const validCredentials = { username: 'user123', password: 'pass123' };

    if (!username) {
        throw new Error("Username is required.");
    }
    if (!password) {
        throw new Error("Password is required.");
    }
    if (username !== validCredentials.username || password !== validCredentials.password) {
        throw new Error("Invalid username or password.");
    }
    return "Login successful!";
}

// Example usage:
try {
    console.log(login("user123", "pass123"));  // Output: Login successful!
    console.log(login("", "pass123"));         // Throws: Username is required.
} catch (err) {
    console.error(err.message);
}
