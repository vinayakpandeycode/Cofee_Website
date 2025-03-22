// Menu Button Navigation
document.getElementById("explore-menu").addEventListener("click", function() {
    window.location.href = "#menu";
});

// Order Now Button
document.querySelectorAll(".order-btn").forEach(button => {
    button.addEventListener("click", function() {
        alert("Your order has been placed successfully!");
    });
});

// Login Form Validation
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "admin" && password === "1234") {
        document.getElementById("login-message").innerText = "Login successful!";
        document.getElementById("login-message").style.color = "green";
    } else {
        document.getElementById("login-message").innerText = "Invalid username or password!";
        document.getElementById("login-message").style.color = "red";
    }
});
