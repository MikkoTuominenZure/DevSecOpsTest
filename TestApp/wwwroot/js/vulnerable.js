// Example of purposely vulnerable JavaScript code

// Vulnerable to Cross-Site Scripting (XSS)
function displayUserInput() {
    var userInput = document.getElementById('userInput').value;
    document.getElementById('output').innerHTML = userInput; // Directly inserting user input into HTML
}

// Vulnerable to SQL Injection (assuming server-side code is similar)
function getUserData(userId) {
    var query = "SELECT * FROM users WHERE id = '" + userId + "'"; // Concatenating user input into SQL query
    // Execute query (server-side)
}

// Vulnerable to Insecure Direct Object References (IDOR)
function getUserProfile(userId) {
    fetch('/api/user/' + userId) // Directly using user input in API endpoint
        .then(response => response.json())
        .then(data => console.log(data));
}

// Vulnerable to Insecure Storage
localStorage.setItem('userToken', '12345'); // Storing sensitive data in local storage

// Vulnerable to Insecure Communication
fetch('http://example.com/api/data') // Using HTTP instead of HTTPS
    .then(response => response.json())
    .then(data => console.log(data));