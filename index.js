<<<<<<< HEAD
// const button = document.querySelector('.gradient-button');

// function validateEmail() {
//   var emailText = document.getElementById('email').value;
//   var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
//   if (pattern.test(emailText)) {
//     return true;
//   } else {
//     alert('bad');
//     return false;
//   }
// }

// window.onload = function () {
//   document.getElementById('form').onmouseover = validateEmail;
// };
=======
// check validity of email
function checkEmail() {
  var email = document.getElementById('email');
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
  }
}
>>>>>>> 5df0dd37354419d1caf355978eb8be39cc5afef9
