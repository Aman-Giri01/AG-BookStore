
// Function to handle login state and toggle visibility of divs
function toggleLoginState(isLoggedIn) {
    const loginDiv = document.getElementById('loginDiv');
    const logoutDiv = document.getElementById('logoutDiv');
    const myOrder=document.getElementById('myOrder');
    
    // Show login div and hide logout div if not logged in
    if (!isLoggedIn) {
        loginDiv.style.display = 'block';
        logoutDiv.style.display = 'none';
        myOrder.style.display='none';

    } else {
        loginDiv.style.display = 'none';
        logoutDiv.style.display = 'block';
        myOrder.style.display='block';
    }
}

// Function to handle logout (removes user data from localStorage)
function logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    // Redirect to the login page
    window.location.href = "index.html";
}

// On page load, check the login state
window.onload = function() {
    // Get user name from localStorage
    let curr_user = localStorage.getItem("name");

    // If a user is logged in, show their name and login/logout UI
    if (curr_user) {
        // Dynamically set the name in the "logout" div
        document.getElementById("name").innerHTML = `Welcome: ${curr_user}`;
        // User is logged in, so update the UI
        toggleLoginState(true);
    } else {
        // User is not logged in, show login options
        toggleLoginState(false);
    }
};