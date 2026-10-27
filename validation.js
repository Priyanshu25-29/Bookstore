
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    if (!form) {
        console.error("Registration form not found.");
        return;
    }

    form.addEventListener("submit", function (event) {
        const name = document.getElementById("fullName").value.trim();
        const password = document.getElementById("password").value;
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();

        // Experiment 6: Name and Password Validation
        const namePattern = /^[A-Za-z ]+$/;

        if (name.length < 6 || !namePattern.test(name)) {
            event.preventDefault();
            alert("Name must contain only alphabets and be at least 6 characters long.");
            return;
        }

        if (password.length < 6) {
            event.preventDefault();
            alert("Password must be at least 6 characters long.");
            return;
        }

        // Experiment 7: Email and Phone Validation
        const emailPattern =
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (!emailPattern.test(email)) {
            event.preventDefault();
            alert("Enter a valid email, such as name@domain.com.");
            return;
        }

        if (!/^\d{10}$/.test(phone)) {
            event.preventDefault();
            alert("Phone number must contain exactly 10 digits.");
            return;
        }

        event.preventDefault();
        alert("Registration form validated successfully!");
    });
});
