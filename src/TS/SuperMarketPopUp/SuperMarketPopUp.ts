export function setupSuperMarketPopUp(): void {
  document.addEventListener("scroll", () => {
    const popup = document.querySelector(".SuperMarketPopUp") as HTMLDivElement;

    if (popup) {
      const text = popup.querySelector(".text-white") as HTMLDivElement;

      if (window.scrollY > 400) {
        let extraTag = popup.querySelector(".extra-tag") as HTMLDivElement;
        if (!extraTag) {
          extraTag = document.createElement("div");
          extraTag.classList.add("extra-tag");
          extraTag.textContent = "تنوع بالا و پرتخفیف";
          extraTag.style.color = "white";
          extraTag.style.fontSize = "14px";
          extraTag.style.textAlign = "center";
          extraTag.style.backgroundColor = "transparent";
          popup.insertBefore(extraTag, text);
        }

        popup.style.width = "280px";
        popup.style.flexDirection = "row-reverse";
      } else {
        const extraTag = popup.querySelector(".extra-tag") as HTMLDivElement;
        if (extraTag) {
          extraTag.remove();
        }
        popup.style.width = "130px";
        popup.style.height = "50px";
        popup.style.flexDirection = "row-reverse";
        popup.style.gap = "2px";
      }
    }
  });
}

setupSuperMarketPopUp();
