import dataFetcher from "../dataFetcher";

const storySlider = async (): Promise<void> => {
  try {
    let data = await dataFetcher("/storySlider");
    const slides = data.map((item: any) => {
      return `<swiper-slide class="w-full p-[10px] flex flex-col justify-center items-center gap-[10px]">
                    <div class="p-[2.5px]  bg-gradient-to-r from-[#e03d96] to-[#7d4c9e] w-fit rounded-full">
                        <div class="w-[74px] h-[74px] bg-white p-[3px] rounded-full">
                            <img class="rounded-full" src="${item.src}" alt="${item.alt}">
                        </div>
                    </div>
                    <div class="text-[12px] text-black/70 text-center line-clamp-2">${item.text}</div>
                </swiper-slide>`;
    });

    document.querySelector(".storySlider")!.innerHTML = slides.join("");
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default storySlider;