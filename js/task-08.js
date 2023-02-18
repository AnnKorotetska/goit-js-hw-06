const formInput = document.querySelector(".login-form");

formInput.addEventListener("submit", (event) => {
  event.preventDefault();

  const emptyEmail = event.currentTarget.elements.email.value === "";
  const emptyPassword = event.currentTarget.elements.password.value === "";

  if (emptyEmail || emptyPassword) {
    alert("Всі поля повинні бути заповнені!");
    return;
  }

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  const formData = { email, password };

  console.log(formData);

  event.currentTarget.reset();
});
