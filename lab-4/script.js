const usernameInput = document.getElementById("username");
const feedback = document.getElementById("feedback");
const form = document.getElementById("registerForm");

let isUsernameAvailable = false;
let existingUsers = [];

fetch("users.json")
    .then(response => response.json())
    .then(data => {
        existingUsers = data.usernames;
    });

usernameInput.addEventListener("input", function () {
    const username = usernameInput.value.trim();

    if (username.length === 0) {
        feedback.textContent = "";
        return;
    }

    feedback.textContent = "Checking...";
    feedback.className = "loading";

    setTimeout(() => {
        if (existingUsers.includes(username)) {
            feedback.textContent = "Username already taken";
            feedback.className = "taken";
            isUsernameAvailable = false;
        } else {
            feedback.textContent = "Username available";
            feedback.className = "available";
            isUsernameAvailable = true;
        }
    }, 500);
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!isUsernameAvailable) {
        alert("Please choose an available username.");
        return;
    }

    const newUsername = usernameInput.value.trim();

    existingUsers.push(newUsername); 

    alert("Registration successful!");

    usernameInput.value = "";
    feedback.textContent = "";
});
