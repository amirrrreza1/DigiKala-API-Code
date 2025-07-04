import dataFetcher from "../dataFetcher";
import { MainSliderType } from "../global";

const mainSlider = async (): Promise<void> => {
  try {
    let data= await dataFetcher("/mainSlider");
    const pages = data.map((item: MainSliderType) => {
      return `<swiper-slide><img class="rounded-[20px] lg:rounded-none" src="${item.src}" alt=""></swiper-slide>`;
    });

    document.querySelector(".mainSlider")!.innerHTML = pages.join("");
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default mainSlider;