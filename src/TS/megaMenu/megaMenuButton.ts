function toggleMenu(): void {
  const menuLink = document.getElementById("menu-link") as HTMLElement;
  const overlay = document.getElementById("overlayMenu") as HTMLElement;
  const submenu = document.getElementById("submenu") as HTMLElement;
  const headerx = document.querySelector(".HeaderZindexTwo") as HTMLElement;

  const scrollIncrement = -1; // میزان افزایش اسکرول (100 پیکسل)

  // 1. ایونت لیسنر برای `mouseenter` روی `menuLink`
  menuLink.addEventListener("mouseenter", () => {
    // غیرفعال کردن اسکرول
    document.body.style.overflow = "hidden";

    // افزایش اسکرول صفحه
    window.scrollBy(0, scrollIncrement);

    // نمایش منو و overlay
    overlay.classList.remove("hidden");
    submenu.classList.remove("hidden");

    // اضافه کردن کلاس CustomTop به HeaderxZindexTwo
    headerx.classList.add("CustomTop");
  });

  // 2. ایونت لیسنر برای `mouseleave` روی `overlay`
  overlay.addEventListener("mouseleave", () => {
    // فعال کردن مجدد اسکرول
    document.body.style.overflow = "auto";

    // پنهان کردن منو و overlay
    overlay.classList.add("hidden");
    submenu.classList.add("hidden");

    // حذف کلاس CustomTop از HeaderxZindexTwo
    headerx.classList.remove("CustomTop");
  });

  // 3. ایونت لیسنر برای `mouseleave` روی `submenu`
  submenu.addEventListener("mouseleave", () => {
    // فعال کردن مجدد اسکرول
    document.body.style.overflow = "auto";

    overlay.classList.add("hidden");
    submenu.classList.add("hidden");

    headerx.classList.remove("CustomTop");
  });
}

export default toggleMenu;
