// Email Validation and Sanitation
document.getElementById('email').addEventListener('input', function() {
    var emailInput = this.value;
    var errorMessage = document.getElementById('emailError');
    const submitButton = document.getElementById('submitBtn');
    const emailField = this;

    // Regular expression to check for valid email structure
    var emailParts = emailInput.split('@');

    // Check for multiple "@" symbols and for special characters and numbers in the domain
    var hasSpecialCharacters = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]/.test(emailParts[1] || '');

    if (emailParts.length > 2 || hasSpecialCharacters || (emailParts.length === 2 && emailParts[1].match(/\d/))) {
        errorMessage.textContent = 'Invalid email format';
        errorMessage.style.display = 'block'; // Show error message
        submitButton.disabled = true; // Disable submit button
        emailField.style.borderColor = 'red'; // Change border color to red
        emailField.style.color = 'red'; // Change text color to red
        errorMessage.classList.add('shake'); // Add shake class
    } else {
        errorMessage.textContent = '';
        errorMessage.style.display = 'none'; // Hide error message
        submitButton.disabled = false; // Enable submit button
        emailField.style.borderColor = ''; // Reset border color
        emailField.style.color = ''; // Reset text color
        errorMessage.classList.remove('shake'); // Remove shake class
    }

});

// Password Validation and Sanitation
document.getElementById('password').addEventListener('input', function() {
    var passwordInput = this.value;
    var passwordErrorMessage = document.getElementById('passwordError');
    const submitButton = document.getElementById('submitBtn');
    const passwordField = this;

    // Regular expression to check for special characters
    var hasSpecialCharacters = /[!#$%^&*()@_+\-=\[\]{};':"\\|.,<>\/?]/.test(passwordInput);

    // Password validation: No special characters and length must be <= 255 characters
    if (passwordInput.length > 255 || hasSpecialCharacters) {
        passwordErrorMessage.textContent = 'No symbols allowed';
        passwordErrorMessage.style.display = 'block'; // Show error message
        submitButton.disabled = true; // Disable submit button
        passwordField.style.borderColor = 'red'; // Change border color to red
        passwordField.style.color = 'red'; // Change text color to red
        passwordErrorMessage.classList.add('shake'); // Add shake class
    } else {
        passwordErrorMessage.textContent = '';
        passwordErrorMessage.style.display = 'none'; // Hide error message
        submitButton.disabled = false; // Enable submit button
        passwordField.style.borderColor = ''; // Reset border color
        passwordField.style.color = ''; // Reset text color
        passwordErrorMessage.classList.remove('shake'); // Remove shake class
    }
});
