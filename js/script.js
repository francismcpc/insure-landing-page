document.addEventListener("DOMContentLoaded", () => {
  const mainNav = document.querySelector(".main-nav");
  const toggleOpen = document.querySelector("#mobile-menu");
  const toggleClose = document.querySelector(".mobile-menu-close");

  toggleOpen.addEventListener("click", () => {
    mainNav.classList.add("mobile-menu-open");
    toggleOpen.style.display = "none";
    toggleClose.style.display = "block";
  });

  toggleClose.addEventListener("click", () => {
    mainNav.classList.remove("mobile-menu-open");
    toggleOpen.style.display = "block";
    toggleClose.style.display = "none";
  });

  const handleWindowResize = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      toggleOpen.style.display = mainNav.classList.contains("mobile-menu-open")
        ? "none"
        : "block";
      toggleClose.style.display = mainNav.classList.contains("mobile-menu-open")
        ? "block"
        : "none";
    } else {
      toggleOpen.style.display = "none";
      toggleClose.style.display = "none";
      mainNav.classList.remove("mobile-menu-open");
    }
  };

  window.addEventListener("resize", handleWindowResize);

  handleWindowResize();
});
