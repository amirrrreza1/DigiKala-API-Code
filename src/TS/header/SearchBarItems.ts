import dataFetcher from "../dataFetcher";
import {SearchBarItemsType} from "../global";

const SearchBarItems = async () => {
  try {
    let data = await dataFetcher("/SearchBarItems");
    const SearchBarItems = data.map((item: SearchBarItemsType) => {
      return `<swiper-slide class="h-[25px] leading-[25px] border-[1px] border-black/40 rounded-xl flex justify-center items-center gap-1 text-[10px]">
      ${item.text}
        <img src="./Images/SVG/ToRightIcon.svg" alt="to left" width="15">
      </swiper-slide>`;
    });

    const container = document.querySelector(".SearchBarSwiper");
    if (container) {
      container.innerHTML = SearchBarItems.join("");
    } else {
      console.error("Element with class 'clientTasteItems' not found.");
    }
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default SearchBarItems;

