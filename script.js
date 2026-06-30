const button = document.getElementById("btn");

button.addEventListener("click", function () {
    alert("Welcome to my Portfolio!");
});

// Redirect to login page
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", function () {
        window.location.href = "login.html";
    });
}
