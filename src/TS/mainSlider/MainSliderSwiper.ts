const swiperMainSlider = (): void => {
  const mainSlider = document.querySelector(".mainSlider") as HTMLElement;
  const nextBtnmainSlider = document.querySelector(
    ".custom-nextmainSlider"
  ) as HTMLElement;
  const prevBtnmainSlider = document.querySelector(
    ".custom-prevmainSlider"
  ) as HTMLElement;

  if (mainSlider && nextBtnmainSlider && prevBtnmainSlider) {
    nextBtnmainSlider.addEventListener("click", () => {
      (mainSlider as any).swiper.slidePrev();
    });

    prevBtnmainSlider.addEventListener("click", () => {
      (mainSlider as any).swiper.slideNext();
    });
  }
};

export default swiperMainSlider;
