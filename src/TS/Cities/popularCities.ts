import dataFetcher from "../dataFetcher";
import { PopularCityType } from "../global";

const popularCities = async () => {
  try {
    let data= await dataFetcher("/popularCities");
    const PopularCities = data.map((item: PopularCityType) => {
      return `<swiper-slide class="border-[1px] border-black/40 rounded-xl flex justify-center items-center gap-1 mx-1 text-[14px]">
      ${item.text}
        <img src="./Images/SVG/ToRightIcon.svg" alt="to left" width="15">
      </swiper-slide>`;
    });

    const container = document.querySelector(".popularCities");
    if (container) {
      container.innerHTML = PopularCities.join("");
    } else {
      console.error("Element with class 'clientTasteItems' not found.");
    }
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default popularCities;
