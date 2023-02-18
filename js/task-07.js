const reffs = {
  elemRef: document.querySelector("#font-size-control"),
  textRef: document.querySelector("#text"),
};

reffs.elemRef.addEventListener("input", (event) => {
  reffs.textRef.style.fontSize = `${event.currentTarget.value}px`;
});
