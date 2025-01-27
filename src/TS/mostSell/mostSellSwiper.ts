const swiperMostSell = (): void => {
  const swiperMostSellElement = document.querySelector(
    ".mostSellItem"
  ) as HTMLElement;
  const nextBtnMostSell = document.querySelector(
    ".custom-nextMostSell"
  ) as HTMLElement;
  const prevBtnMostSell = document.querySelector(
    ".custom-prevMostSell"
  ) as HTMLElement;

  if (swiperMostSellElement && nextBtnMostSell && prevBtnMostSell) {
    nextBtnMostSell.addEventListener("click", () => {
      (swiperMostSellElement as any).swiper.slidePrev();
    });

    prevBtnMostSell.addEventListener("click", () => {
      (swiperMostSellElement as any).swiper.slideNext();
    });
  }
};

export default swiperMostSell;
