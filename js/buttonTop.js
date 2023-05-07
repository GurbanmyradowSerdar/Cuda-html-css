const button = document.getElementById("buttonTop");

window.addEventListener("scroll", (Event) => {
  let scroll = this.scrollY;
  if (scroll > 100) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

button.addEventListener("click", (Event) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
