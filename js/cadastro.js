function validarEmail(email) {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailInserido = document.newsletter.email.value;
  const emailTest = regexEmail.test(emailInserido);

  if(!emailTest) {
    return alert('O formato do email está errado.');
  } else {
    return alert('O email foi cadastrado com sucesso na newsletter.');
  }
}

