$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var emailInput = $("input#email");
    var passwordInput = $("input#password");
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        name: $("input#name").val(),
        email: emailInput.val().trim(),
        password: passwordInput.val().trim(),
        creditCard: $("input#creditCard").val().trim(),
        streetAddress: $("input#streetAddress").val(),
        city: $("input#city").val(),
        state: $("input#state").val(),
        zipcode: $("input#zipcode").val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.name, userData.email, userData.password, userData.creditCard, userData.streetAddress, userData.city, userData.state, userData.zipcode);
      $("input#name").val("");
      emailInput.val("");
      passwordInput.val("");
      $("input#creditCard").val("");
      $("input#streetAddress").val("");
      $("input#city").val("");
      $("input#state").val("");
      $("input#zipcode").val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(name, email, password, creditCard, streetAddress, city, state, zipcode) {
      $.post("/api/signup", {
        name: name,
        email: email,
        password: password,
        creditCard: creditCard,
        streetAddress: streetAddress,
        city: city,
        state: state, 
        zipcode: zipcode
      }).then(function(data) {
        if (data === false) {
          window.location.assign("/login")
        }
        else{
        window.location.replace(data);        
        }
        // If there's an error, handle it by throwing up a boostrap alert
      }).catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });