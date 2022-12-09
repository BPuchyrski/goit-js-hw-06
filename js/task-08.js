const form = document.querySelector(".login-form");
const btn = document.querySelector(".login-form button");
const fun = (e) => {
  e.preventDefault();

  const mail = form.elements.email.value;
  const pass = form.elements.password.value;

  if (mail === "" || pass === "") {
    alert("wszystkie pola powinny zostać wypełnione.");
  } else {
    const login = {
      email: mail,
      password: pass,
    };
    console.log(login);
    form.reset();
  }
};

btn.addEventListener("click", fun);
