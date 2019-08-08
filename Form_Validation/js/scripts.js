(function() {
    var $form = document.querySelector('#register-form');
    var $emailInput = document.querySelector('#email');
    var $passwordInput = document.querySelector('#password');

        function validateEmail() {
            var value = $emailInput.value;
            var hasAtSign = value.indexOf('@') > -1;
            var hasDot = value.indexOf('.') > -1;
            return value && hasAtSign && hasDot;
        }

        function validatePassword() {
            var value = $passwordInput.value;
            return value && value.lenght >= 8;
        }

        // Generic function to show an error message for an input field
        function showErrorMessage($input, message) {
            var $container = $input.parentElement; // The .input-wrapper
        }

        // Remove an existing error
        var error = $container.querySelector('.errormessage');
        if (error) {
            $container.removeChild(error);
        }

        // Now add the error if the message isn't empty
        if (message) {
            var error = document.createElement('div');
            error.classsList.add('error-message');
            error.innerText = message;
            $container.appendChild(error);
         }  

        function validateForm() {

            return validateEmail() && validatePassword();
        }

        $form.addEventListener('submint', (e) => {
            e.preventDefault(); // Do not submit to the server
            if (validateForm()) {
                alert('Success!');
            }
        })
})();