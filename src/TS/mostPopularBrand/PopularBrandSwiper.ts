const PopularBrandSwiper = (): void => {
  const swiperBrand = document.querySelector(
    ".popularBrandsSwiper"
  ) as HTMLElement;
  const nextBtnBrand = document.querySelector(
    ".custom-nextBrand"
  ) as HTMLElement;
  const prevBtnBrand = document.querySelector(
    ".custom-prevBrand"
  ) as HTMLElement;

  if (swiperBrand && nextBtnBrand && prevBtnBrand) {
    nextBtnBrand.addEventListener("click", () => {
      (swiperBrand as any).swiper.slidePrev();
    });

    prevBtnBrand.addEventListener("click", () => {
      (swiperBrand as any).swiper.slideNext();
    });
  }
};

export default PopularBrandSwiper;
