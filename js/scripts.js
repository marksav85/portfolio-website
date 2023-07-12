(function() {
    let form = document.querySelector('.contact__form');
    let emailInput = document.querySelector('#email');
    let phoneInput = document.querySelector('#phone');
    
    function showErrorMessage(input, message) {
      let container = input.parentElement; // The .input-wrapper
      
      // Remove an existing error
      let error = container.querySelector('.error-message');
      if (error) {
        container.removeChild(error);
      }
      
      // Now add the error, if the message is not empty
      if (message) {
        let error = document.createElement('div');
        error.classList.add('error-message');
        error.innerText = message;
        container.appendChild(error);
      }
    }
    
    function validateEmail() {
      let value = emailInput.value;
      
      if (!value) {
        showErrorMessage(emailInput, 'E-mail is a required field.');
        return false;
      }
      
      if (value.indexOf('@') === -1) {
        showErrorMessage(emailInput, 'You must enter a valid e-mail address.');
        return false;
      }
  
      if (value.indexOf('.') === -1) {
        showErrorMessage(emailInput, 'You must enter a valid e-mail address.');
        return false;
      }
      
      showErrorMessage(emailInput, null);
      return true;
    }
    
    function validatephone() {
      let value = phoneInput.value;
      let allNumbers = /^[0-9]+$/;
      
      if (!value) {
        showErrorMessage(phoneInput, 'phone is a required field.');
        return false;
      }

      if (!value.match(allNumbers)) {
        showErrorMessage(phoneInput, 'The phone must contain only numbers.');
        return false;
      }
      
      if (value.length < 10) {
        showErrorMessage(phoneInput, 'The phone needs to be at least 10 characters long.');
        return false;
      }

      
      
      showErrorMessage(phoneInput, null);
      return true;
    }
    
    function validateForm() {
      let isValidEmail = validateEmail();
      let isValidphone = validatephone();
      return isValidEmail && isValidphone;
    }
    
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Do not submit to the server
      if (validateForm()) {
        alert('Success!');
      }
    });
    
    emailInput.addEventListener('input', validateEmail);
    phoneInput.addEventListener('input', validatephone);
  
    // THE RETURN STATEMENT HERE
  })();