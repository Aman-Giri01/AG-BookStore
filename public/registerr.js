document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("register").addEventListener("submit", (event) => {
        event.preventDefault();
        let name, username, email, password, confirmpassword;
        name = document.getElementById("name").value;
        username = document.getElementById("username").value;
        email = document.getElementById("email").value;
        password = document.getElementById("password").value;
        confirmpassword = document.getElementById("confirmpassword").value;

        if (password !== confirmpassword) {
            alert("Password not matched");
            return;
        }
        
        let users = { name, username, email, password };
        let user_records = JSON.parse(localStorage.getItem("UserData")) || [];
        
        if (user_records.some((v) => v.email === email || v.username === username)) {
            alert("Duplicate data");
        } else {
            user_records.push(users);
            localStorage.setItem("UserData", JSON.stringify(user_records));
            window.location.href = "login.html";
        }
    });
});

