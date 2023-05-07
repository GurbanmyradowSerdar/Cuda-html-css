const elems = document.querySelectorAll(".firstPage__link");

const elemsArray = [];
for (const i of elems) {
  i.removeAttribute("href");
  elemsArray.push(i);
}

// CHECK IF WE PRESS A NAV ITEM THEY GET THE ATRIBUTE HREF WITH ID NAME WHERE THEY NEED GO ===========================================================================
// NAVIGATION =======================================================================
elemsArray.forEach((elem) => {
  elem.addEventListener("click", (Event) => {
    switch (elem) {
      case elems[0]:
        elem.setAttribute("href", "#goToHome");
        break;
      case elems[1]:
        elem.setAttribute("href", "#goToAbout");
        break;
      case elems[2]:
        elem.setAttribute("href", "#goToWork");
        break;
      case elems[3]:
        elem.setAttribute("href", "#goToBlog");
        break;
      case elems[4]:
        elem.setAttribute("href", "#goToContact");
        break;
    }
  });
});

// BUTTON IN FIRST PAGE NAVIGATION ==========================================================================

const firstPageButton = document.querySelector(".firstPage__button a");
firstPageButton.removeAttribute("href");

firstPageButton.addEventListener("click", (Event) => {
  firstPageButton.setAttribute("href", "#goToWorkWithUs");
});
