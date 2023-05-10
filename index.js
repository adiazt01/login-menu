const usernameInput = document.getElementById("usernameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

estadosInput();

/* Validacion de entradas */

function estadosInput() {
  usernameInput.onchange = () => {
    if (usernameInput.value != "") {
      emailInput.attributes.removeNamedItem("disabled");
    } else {
      emailInput.setAttribute("disabled", null);
      emailInput.value = "";
      if (passwordInput != "") {
        passwordInput.value = "";
        passwordInput.setAttribute("disabled", null);
      }
    }
  };

  emailInput.onchange = () => {
    if (emailInput.value != "") {
      passwordInput.attributes.removeNamedItem("disabled");
    } else {
      passwordInput.setAttribute("disabled", null);
      passwordInput.value = "";
    }
  };
}

/*  */
