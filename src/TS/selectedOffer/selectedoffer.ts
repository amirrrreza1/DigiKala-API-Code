import dataFetcher from "../dataFetcher";
import { selectedOfferType } from "../global";

const selectedOffer = async () => {
  try {
    let data:selectedOfferType[] = await dataFetcher("/selectedOffer");
    const SelectedOffer = data.map((item: any) => {
      return `<div class="w-[50%] lg:w-[20%] 2xl:w-[16.5%] p-3 border-r-[1px] border-b-[1px]">
          <div class="w-full flex justify-center items-center"><img width="150px" height="150px" src="${item.src}"
              alt="${item.alt}"></div>
          <div class="flex justify-between items-center w-[85%] m-auto">
            <div class="bg-[#D2334A] px-2 py-[2px] rounded-2xl text-white">
              ${item.offPercent}
            </div>
            <div class="flex items-center">
              <div class="">${item.price}</div>
              <img src="./Images/SVG/toman.svg" alt="toman">
            </div>
          </div>
          <div class="w-[85%] m-auto line-through text-black/20 text-left ml-[20px]">${item.purePrice}</div>
        </div>`;
    });
    document.querySelector(".SelectedOfferProducts")!.innerHTML =
      SelectedOffer.join("");
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default selectedOffer;