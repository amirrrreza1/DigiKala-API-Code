import dataFetcher from "../dataFetcher";

const mostSell = async () => {
  try {
    let data = await dataFetcher("/mostSell");
    const MostSell = data.map((item: any) => {
      return `<swiper-slide>
                    <div class="flex justify-between items-center gap-x-3 p-[15px]">
                        <img width="80px" height="80px" src="${item.src}" alt="${item.alt}">
                        <div class="font-bold text-[30px] text-blue">${item.count}</div>
                        <div class="text-[14px] text-black/70">${item.text}</div>
                    </div>
                    <span class='w-[70%] h-[.5px] bg-black/20 block m-auto'></span>
                    <div class="flex justify-center items-center gap-x-3 p-[15px]">
                        <img width="80px" height="80px" src="${item.src2}" alt="${item.src2}">
                        <div class="font-bold text-[30px] text-blue">${item.count2}</div>
                        <div class="text-[14px] text-black/70">${item.text2}</div>
                    </div>
                    <span class='w-[70%] h-[.5px] bg-black/20 block m-auto'></span>
                    <div class="flex justify-center items-center gap-x-3 p-[15px]">
                        <img width="80px" height="80px" src="${item.src3}" alt="${item.alt3}">
                        <div class="font-bold text-[30px] text-blue">${item.count3}</div>
                        <div class="text-[14px] text-black/70">${item.text3}</div>
                    </div>

                </swiper-slide>`;
    });
    document.querySelector(".mostSellItem")!.innerHTML = MostSell.join("");
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default mostSell;