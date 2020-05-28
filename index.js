let form = document.getElementById('form');
let email = document.getElementById('email');

form.addEventListener('submit', (e) => {
  //This will prevent the page from reloading
  e.preventDefault();
  //Check if it's a valid email
  let emailValue = email.value;

  if (!validateEmail(emailValue)) {
    form.classList.add('error');
  } else {
    form.classList.remove('error');
  }
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
