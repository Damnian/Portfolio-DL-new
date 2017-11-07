var contactForm = document.querySelector('.contact-form'),
    inputs = contactForm.querySelectorAll('.contact-form__item--input, .contact-form__item--textarea');

//nadanie klasy labelom, w momencie gdy input posiada wartość
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('blur', function () {
    if (this !== null && this.value == '') {
      this.nextElementSibling.classList.remove('if-has-value');
    } else {
      this.nextElementSibling.classList.add('if-has-value');
      }
  }, false);
}

// function notEmpty() {
//   for (var i = 0; i < inputs.length; i++) {
//     if (inputs[i].value == '' || inputs[i].value == null) {
//       inputs[i].setCustomValidity('Pole nie może być puste');
//     }
//     else if (inputs[i].value.length < 3) {
//       inputs[i].setCustomValidity('Pole musi zawierać przynajmniej 3 znaki');
//     }
//     else {
//       inputs[i].setCustomValidity('');
//     }
//   }
//   console.log(isEmpty);
// }


// function checkName() {
//   var nameReg = /^[a-zA-Z- ]+$/i;
//   if (nameReg.test(nameInput.value) === false && nameInput.value.length >= 3) {
//     nameInput.setCustomValidity('Pole nie może zawierać liczb i znaków specjalnych');
//     }
//     else {
//       nameInput.setCustomValidity('');
//     }
// }

// function checkEmail() {
//   var emailReg = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
//   if (emailReg.test(emailInput.value) === false) {
//     emailInput.setCustomValidity('Wpisz poprawny adres e-mail');
//     }
//     else {
//       emailInput.setCustomValidity('');
//     }
// }

var sendBtn = document.getElementById('send-form');

sendBtn.addEventListener('click', function () {

  var checkName = false,
      checkEmail = false,
      checkMessage = false;

  var nameReg = /^[a-zA-Z- ]+$/i;
  var emailReg = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;

  if (checkName == false) {
    var nameInput = document.getElementById('name-input');

    if (nameInput.value == '' || nameInput.value == null) {
      nameInput.setCustomValidity('Imię nie może być puste');
    }
    else if (nameInput.value.length < 3 || nameReg.test(nameInput.value) === false) {
      nameInput.setCustomValidity('Imię musi zawierać przynajmniej 3 znaki (bez liczb i znaków specjalnych)');
    }
    else {
      nameInput.setCustomValidity('');
      checkName = true;
    }
  }

  console.log('checkName: ' + checkName);

  if (checkEmail == false) {
    var emailInput = document.getElementById('email-input');

      if (emailInput.value == '' || emailInput.value == null) {
        emailInput.setCustomValidity('Email nie może być pusty');
      }
      else if (emailReg.test(emailInput.value) === false) {
        emailInput.setCustomValidity('Wpisz poprawny adres e-mail');
      }
      else {
        emailInput.setCustomValidity('');
        checkEmail = true;
      }
  }

  console.log('checkEmail: '+checkEmail);

  if (checkMessage == false) {
    var messageInput = document.getElementById('message');

      if (messageInput.value == '' || messageInput.value == null) {
        messageInput.setCustomValidity('Wiadomość nie może być pusta');
      }
      else {
        messageInput.setCustomValidity('');
        checkMessage = true;
      }
  }

  console.log('checkMessage: '+checkMessage);

}, false);

