const HeaedrtoggleSearchBar = () => {
  const overlay = document.getElementById(
    "HeaderSearchBarOverlay"
  ) as HTMLElement | null;
  const content = document.getElementById(
    "HeaderSearchBarContent"
  ) as HTMLElement | null;
  const button = document.getElementById(
    "HeaderSearchBar"
  ) as HTMLElement | null;
  const input = document.getElementById(
    "SearchBarInput"
  ) as HTMLInputElement | null;
  const body = document.body as HTMLElement;

  const closeElements = () => {
    if (overlay && content) {
      overlay.classList.add("hidden");
      content.classList.add("hidden");
    }
  };

  button?.addEventListener("click", (event) => {
    event.stopPropagation(); 
    if (overlay && content) {
      if (overlay.classList.contains("hidden")) {
        overlay.classList.remove("hidden");
        content.classList.remove("hidden");
        input?.focus(); 
      } else {
        closeElements();
      }
    }
  });

  content?.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  body.addEventListener("click", closeElements);
  overlay?.addEventListener("click", closeElements);
};

export default HeaedrtoggleSearchBar;
