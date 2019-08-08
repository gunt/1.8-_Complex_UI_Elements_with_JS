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

            return false;
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