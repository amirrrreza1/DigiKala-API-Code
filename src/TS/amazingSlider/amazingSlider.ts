import dataFetcher from "../dataFetcher";

const amazingSlider = async () => {
  try {
    let data = await dataFetcher("/amazingSlider");
    const amazingSliderItem = data
      .map((item: any) => {
        return `<swiper-slide class="bg-white flex flex-col items-center">
        <img width="170px" height="170px" class="p-[10px]" src="${item.src}" alt="${item.alt}">
        <div class="h-[40px] leading-[20px] text-[12px] text-black/70 line-clamp-2 m-[10px]">${item.text}</div>
        <div class="w-full flex justify-between items-center px-[10px]">
          <div class="w-fit px-1 text-white text-[13px] bg-[#D32F2F] rounded-[30px]">${item.offPercent}</div>
          <div class="flex items-center">
            <div class="text-[15px]">${item.price}</div>
            <img src="./Images/SVG/toman.svg" alt="toman">
          </div>
        </div>
        <div class="w-full text-end line-through text-black/40 pl-[20px]">${item.purePrice}</div>
      </swiper-slide>
      `;
      })
      .join("");

    document.querySelector(".amazingSlider")!.insertAdjacentHTML("beforeend", amazingSliderItem);
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default amazingSlider;
