//Basic Login System
// This code is a simple login system that checks if the username and password match predefined values.

function login(username, password) {
    if (username === "admin" && password === "password123") {
        console.log("Login successful!");
    }   
    else {
        console.log("Login failed. Please check your username and password.");
    }
}

login("admin", "password123"); 
