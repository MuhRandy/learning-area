window.onload = () => {
  document.getElementById("mail").oninput = checkEmail;
  document.getElementById("country").onchange = checkZIP;
  document.getElementById("ZIP").oninput = checkZIP;
  document.getElementById("pwd").oninput = checkPassword;
  document.getElementById("Cpwd").oninput = confirmPassword;

  document.querySelector("form").onsubmit = (e) => {
    const form = document.querySelector("form");

    if (form.checkValidity()) {
      form.textContent = "👍️ Data submitted";
    } else {
      confirmPassword();
      checkPassword();
      checkZIP();
      checkEmail();
    }

    e.preventDefault();
  };
};

function checkEmail() {
  const email = document.querySelector("#mail");
  const errorBoard = document.querySelector("#mail + .error");

  if (email.validity.valueMissing) {
    email.setCustomValidity("Email required");
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity("Expecting an email");
  } else {
    email.setCustomValidity("");
  }

  isError(errorBoard, email);
}

function checkZIP() {
  const constraints = {
    ch: [
      "^(CH-)?\\d{4}$",
      "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    ],
  };

  const country = document.getElementById("country").value;
  const ZIPField = document.getElementById("ZIP");
  const errorBoard = document.querySelector("#ZIP + .error");

  const constraint = new RegExp(constraints[country][0], "");
  console.log(constraint);

  if (constraint.test(ZIPField.value)) {
    ZIPField.setCustomValidity("");
  } else {
    ZIPField.setCustomValidity(constraints[country][1]);
  }

  isError(errorBoard, ZIPField);
}

function checkPassword() {
  const password = document.querySelector("#pwd");
  const errorBoard = document.querySelector("#pwd + .error");

  if (password.validity.valueMissing) {
    password.setCustomValidity("Password required");
  } else if (password.validity.tooShort) {
    password.setCustomValidity("Password too short");
  } else {
    password.setCustomValidity("");
  }

  isError(errorBoard, password);
}

function confirmPassword() {
  const password = document.querySelector("#pwd");
  const CPassword = document.querySelector("#Cpwd");
  const errorBoard = document.querySelector("#Cpwd + .error");

  if (CPassword.value !== password.value) {
    CPassword.setCustomValidity("Password doesn't match");
  } else {
    CPassword.setCustomValidity("");
  }

  isError(errorBoard, CPassword);
}

function isError(errorBoard, input) {
  if (input.checkValidity()) {
    errorBoard.textContent = "";
    errorBoard.style.display = "none";
  } else {
    errorBoard.textContent = input.validationMessage;
    errorBoard.style.display = "inline";
  }
}
