//"Reasons for inquiry" and "Have you been to the restaurant" are default
//selections and therefore can't be validated.
//The "Additional Information" section is best kept optional.


function validation() {
    var formName = document.forms["contactForm"]["Fname"].value;
    var formEmail = document.forms["contactForm"]["email"].value;
    var formPhone = document.forms["contactForm"]["phone"].value;
    var formCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked').length;


      if (formName == "") {
          window.alert("Please enter your name.");

          return false;
      }
      if (formEmail == "" || formEmail.indexOf("@", 0) < 0 || formEmail.indexOf(".", 0) < 0) {
          window.alert("Please enter a valid e-mail address.");

          return false;
      }
      if (formPhone == "") {
          window.alert("Please enter your telephone number.");

              return false;
      }
      if (formCheckboxes < 1) {
          window.alert("Please indicate which day would be best for us to contact you.")
      }
      else {
        window.alert("Thank you for providing your contact information!")
      }


return false;
}
