// signup.js

document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (validateForm(username, email, password)) {
            window.location.href = 'product.html';
        }
        else {
            return null;
        }
    });


    function validateForm(username, email, password) {
        if (username.trim() === '') {
            alert('Username is required.');
            return false;
        }

        if (email.trim() === '') {
            alert('Email is required.');
            return false;
        }

        if (!isValidEmail(email)) {
            alert('Invalid email format.');
            return false;
        }

        if (password.trim() === '') {
            alert('Password is required.');
            return false;
        }

        return true; // All validations passed
    }

    function isValidEmail(email) {
        // A simple email validation regex (you can use a more robust solution)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
