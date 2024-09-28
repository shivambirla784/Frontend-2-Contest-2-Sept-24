let isEmailValid = false;
let isPasswordValid = false;

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Regex to check valid email format

    if (email.length > 3 && regex.test(email)) {
        emailError.textContent = 'All good to go!';
        emailError.className = 'success';
        isEmailValid = true;
    } else {
        emailError.textContent = 'Make sure email is more than 3 characters and has @ and a .';
        emailError.className = 'error';
        isEmailValid = false;
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');

    if (password.length > 8) {
        passwordError.textContent = 'All good to go!';
        passwordError.className = 'success';
        isPasswordValid = true;
    } else {
        passwordError.textContent = 'Make sure password is more than 8 characters.';
        passwordError.className = 'error';
        isPasswordValid = false;
    }
}

function handleSubmit() {
    if (isEmailValid && isPasswordValid) {
        const confirmation = window.confirm("Are you sure you want to submit?");
        if (confirmation) {
            alert("Successful signup!");
            document.getElementById("myForm").reset();
            document.getElementById('emailError').textContent = '';
            document.getElementById('passwordError').textContent = '';
        } else {
            document.getElementById("myForm").reset();
        }
    } else {
        alert("Please fix the errors before submitting.");
    }
}
