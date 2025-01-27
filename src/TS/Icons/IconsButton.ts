function toggleBoxes(): void {
  const iconsToggle1 = document.getElementById("IconsToggle1") as HTMLElement;
  const toggleBox1 = document.getElementById("ToggleBox1") as HTMLElement;
  const toggleBox2 = document.getElementById("ToggleBox2") as HTMLElement;
  const iconCloseCross = document.getElementById(
    "IconCloseCross"
  ) as HTMLElement;

  if (iconsToggle1 && toggleBox1 && toggleBox2) {
    iconsToggle1.addEventListener("click", () => {
      if (
        toggleBox1.classList.contains("hidden") &&
        toggleBox2.classList.contains("hidden")
      ) {
        toggleBox1.classList.remove("hidden");
        toggleBox2.classList.remove("hidden");
      } else {
        toggleBox1.classList.add("hidden");
        toggleBox2.classList.add("hidden");
      }
    });

    toggleBox1.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleBox1.classList.add("hidden");
      toggleBox2.classList.add("hidden");
    });

    if (iconCloseCross) {
      iconCloseCross.addEventListener("click", () => {
        toggleBox1.classList.add("hidden");
        toggleBox2.classList.add("hidden");
      });
    }
  }
}

export default toggleBoxes;
