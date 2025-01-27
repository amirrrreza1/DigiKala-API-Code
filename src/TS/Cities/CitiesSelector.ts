function toggleHeaderDivs(): void {
  const headerToggleButtons = document.querySelectorAll(
    ".HeaderToggleButton"
  ) as NodeListOf<HTMLElement>;
  const headerToggleDivs = document.querySelectorAll(
    ".HeaderToggleDiv"
  ) as NodeListOf<HTMLElement>;
  const crossButtons = document.querySelectorAll(
    ".CrossButtonHeader"
  ) as NodeListOf<HTMLElement>;

  function showDivs(): void {
    headerToggleDivs.forEach((div) => div.classList.remove("hidden"));
    document.body.style.overflow = "hidden";
  }

  function hideDivs(): void {
    headerToggleDivs.forEach((div) => div.classList.add("hidden"));
    document.body.style.overflow = "auto";
  }

  headerToggleButtons.forEach((button) => {
    button.addEventListener("click", showDivs);
  });

  crossButtons.forEach((button) => {
    button.addEventListener("click", hideDivs);
  });

  headerToggleDivs.forEach((div) => {
    div.addEventListener("click", hideDivs);
  });
}

export default toggleHeaderDivs;
