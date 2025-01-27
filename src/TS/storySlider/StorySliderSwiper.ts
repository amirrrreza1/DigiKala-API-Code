const initializeSwiperControls = (): void => {
  const swiper = document.querySelector<HTMLElement>(".storySlider");
  const nextBtn = document.querySelector<HTMLButtonElement>(".custom-next");
  const prevBtn = document.querySelector<HTMLButtonElement>(".custom-prev");

  if (!swiper || !nextBtn || !prevBtn) return;

  nextBtn.addEventListener("click", () => {
    (swiper as any).swiper.slidePrev();
  });

  prevBtn.addEventListener("click", () => {
    (swiper as any).swiper.slideNext();
  });
};

export default  initializeSwiperControls ;
