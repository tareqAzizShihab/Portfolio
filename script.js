document.addEventListener("DOMContentLoaded", () => {
  const navs = document.querySelectorAll("#nav-link");
  const secs = document.querySelectorAll("section");

  function highlight() {
    let currentSectionIndex = secs.length;

    do {
      --currentSectionIndex;
    } while (secs[currentSectionIndex].offsetTop - 400 > window.scrollY);

    navs.forEach((nav) => nav.classList.remove("selectedNav"));

    navs[currentSectionIndex].classList.add("selectedNav");
  }

  window.addEventListener("scroll", highlight);

  highlight();
});
