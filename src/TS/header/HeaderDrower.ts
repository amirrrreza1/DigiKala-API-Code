const handleScroll = (): void => {
  const header = document.querySelector<HTMLElement>(".HeaderZindexTwo");
  if (!header) return;

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      header.classList.add("HeaderInimation"); // هنگام اسکرول به پایین، کلاس اضافه شود
    } else {
      header.classList.remove("HeaderInimation"); // هنگام اسکرول به بالا، کلاس حذف شود
    }
    lastScrollY = window.scrollY;
  });
};

export default handleScroll;
