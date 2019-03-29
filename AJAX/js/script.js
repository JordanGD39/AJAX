let submit = document.getElementById('submit');
let response = document.getElementById('response');

submit.addEventListener('click', Ajax);

let firstName = document.getElementById('firstName');
let age = document.getElementById('age');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');

function Ajax() {
  let xml = new XMLHttpRequest();
  xml.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      response.innerHTML = this.responseText;
    }
  }
  let httpString = "form_1.php?firstName=" + firstName.value + "&lastName=" + lastName.value + "&age=" + age.value + "&email=" + email.value;
  console.log(httpString);
  xml.open("GET", httpString, true);
  xml.send();
}
