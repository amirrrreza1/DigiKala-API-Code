const handleScroll = (): void => {
  const header = document.querySelector<HTMLElement>(".HeaderZindexTwo");
  if (!header) return;

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      header.classList.add("HeaderInimation");
    } else {
      header.classList.remove("HeaderInimation");
    }
    lastScrollY = window.scrollY;
  });
};

export default handleScroll;
