const reffs = {
  inputEl: document.querySelector("#name-input"),
  outputEl: document.querySelector("#name-output"),
};

reffs.inputEl.addEventListener("input", (event) => {
  reffs.outputEl.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    reffs.outputEl.textContent = "Anonymous";
  }
});
