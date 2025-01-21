const goToTopButton = () => {
  const button1 = document.querySelector(".goToTopBTN");
  const button2 = document.querySelector(".goToTopBTN2");
  if (button1) {
    button1.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  if (button2) {
    button2.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
};

export default goToTopButton;
