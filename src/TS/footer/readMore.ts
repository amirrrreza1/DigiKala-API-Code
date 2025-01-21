const readMore = () => {
  const readMoreBTNs = document.querySelectorAll(".readMoreBTN");
  const readMoreTexts = document.querySelectorAll(".readMoreText");

  readMoreBTNs?.forEach((readMoreBTN, index) => {
    readMoreBTN.addEventListener("click", () => {
      readMoreTexts[index]?.classList.toggle("showMore");

      if (readMoreBTN.innerHTML === "مشاهده بیشتر") {
        readMoreBTN.innerHTML = "بستن";
      } else if (readMoreBTN.innerHTML === "بستن") {
        readMoreBTN.innerHTML = "مشاهده بیشتر";
      }
    });
  });
};

export default readMore