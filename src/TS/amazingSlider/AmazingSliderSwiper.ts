const swiperAmazingSlider = (): void => {
  const amazingSlider = document.querySelector(".amazingSlider") as HTMLElement;
  const nextBtnamazingSlider = document.querySelector(
    ".custom-nextamazingSlider"
  ) as HTMLElement;
  const prevBtnamazingSlider = document.querySelector(
    ".custom-prevamazingSlider"
  ) as HTMLElement;

  if (amazingSlider && nextBtnamazingSlider && prevBtnamazingSlider) {
    nextBtnamazingSlider.addEventListener("click", () => {
      (amazingSlider as any).swiper.slidePrev();
    });

    prevBtnamazingSlider.addEventListener("click", () => {
      (amazingSlider as any).swiper.slideNext();
    });
  }
};

export default swiperAmazingSlider;
