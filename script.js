function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Demo credentials
    if (username === "admin" && password === "1234") {

        // Redirect to portfolio
        window.location.href = "index.html";

    } else {

        document.getElementById("error").textContent =
            "Invalid Username or Password";
    }

}
