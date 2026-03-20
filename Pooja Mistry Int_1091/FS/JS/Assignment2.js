
//Assignment 2: Login Validation System

let correctUsername = "Pooja";
let correctPassword = "45455";

let username = "Pooja";
let password = "45455";

if (username === correctUsername && password === correctPassword) {
    console.log("Login successful!");
} 
else if (username !== correctUsername && password !== correctPassword) {
    console.log("Both incorrect");
} 
else if (username !== correctUsername) {
    console.log("Incorrect username");
} 
else {
    console.log("Incorrect password");
}
