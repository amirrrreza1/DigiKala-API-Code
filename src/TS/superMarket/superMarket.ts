import dataFetcher from "../dataFetcher";

const superMarket = async (): Promise<void> => {
  try {
    let data = await dataFetcher("/superMarket");
    const Items = data.map((item: any) => {
        return `<div class="relative w-[74px] h-[74px] bg-white rounded-full flex justify-center items-center">
                    <img width="58px" height="58px" class="rounded-full" src="${item.src}" alt="${item.alt}">
                    <div class="absolute bg-[#D32F2F] bottom-0 right-0 w-[35px] h-[20px] rounded-[20px] flex justify-center items-center text-white text-[13px] leading-[20px]">${item.offPercent}</div>
                </div>`;
    });

    document.querySelector(".superMarket")!.innerHTML = Items.join("");
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default superMarket;