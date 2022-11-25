const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const form = document.querySelector('#changePassword');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent the form from submitting
    // validate fields
    let isPasswordValid = checkPassword(),
    isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isPasswordValid && isConfirmPasswordValid;
    // submit to the server if the form is valid
    if (isFormValid) {
    }
    });
    const checkPassword = () => {
        let valid = false;
        const password = passwordEl.value.trim();
        if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
        } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include atleast 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character');
        } else {
        showSuccess(passwordEl);
        valid = true;
        }
        return valid;
        };
        const isPasswordSecure = (password) => {
            const re = new
            RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            return re.test(password);
            };

            const checkConfirmPassword = () => {
                let valid = false;
                // check confirm password
                const confirmPassword = confirmPasswordEl.value.trim();
                const password = passwordEl.value.trim();
                if (!isRequired(confirmPassword)) {
                showError(confirmPasswordEl, 'Please enter the password again');
                } else if (password !== confirmPassword) {
                showError(confirmPasswordEl, 'The password does not match');
                } else {
                showSuccess(confirmPasswordEl);
                valid = true;
                }
                return valid;
                };
            const isconfirmpasswordsecure = (confirmPassword) => {
                const re = new
            RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            return re.test(confirmpassword);
            }
    const isRequired = value => value === '' ? false : true;
    const isBetween = (length, min, max) => length < min || length > max ? false :
    true;
    const showError = (input, message) => {
        // get the form-field element
        const formField = input.parentElement;
        // add the error class
        formField.classList.remove('success');
        formField.classList.add('error');
        // show the error message
        const error = formField.querySelector('small');
        error.textContent = message;
        };
        const showSuccess = (input) => {
            // get the form-field element
            const formField = input.parentElement;
            // remove the error class
            formField.classList.remove('error');
            formField.classList.add('success');
            // hide the error message
            const error = formField.querySelector('small');
            error.textContent = '';
            }