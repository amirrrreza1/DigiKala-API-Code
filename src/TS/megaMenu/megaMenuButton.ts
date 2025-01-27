function toggleMenu(): void {
  const menuLink = document.getElementById("menu-link") as HTMLElement;
  const overlay = document.getElementById("overlayMenu") as HTMLElement;
  const submenu = document.getElementById("submenu") as HTMLElement;
  const headerx = document.querySelector(".HeaderZindexTwo") as HTMLElement;

  const scrollIncrement = -1; 

  menuLink.addEventListener("mouseenter", () => {
    document.body.style.overflow = "hidden";

    window.scrollBy(0, scrollIncrement);

    overlay.classList.remove("hidden");
    submenu.classList.remove("hidden");

    headerx.classList.add("CustomTop");
  });

  overlay.addEventListener("mouseleave", () => {
    document.body.style.overflow = "auto";

    overlay.classList.add("hidden");
    submenu.classList.add("hidden");

    headerx.classList.remove("CustomTop");
  });

  submenu.addEventListener("mouseleave", () => {
    document.body.style.overflow = "auto";

    overlay.classList.add("hidden");
    submenu.classList.add("hidden");

    headerx.classList.remove("CustomTop");
  });
}

export default toggleMenu;
