import dataFetcher from "../dataFetcher";

const clientTaste = async () => {
  try {
    let data = await dataFetcher("/clientTaste");
    const ClientTasteItem = data.map((item: any) => {
      return `<div class="w-full md:w-1/2 lg:w-1/4 p-[20px] flex flex-col gap-3">
                <div class="flex flex-col gap-y-2">
                    <div class="">${item.category}</div>
                    <div class="text-[12px] text-black/70">بر اساس سلیقه شما</div>
                </div>
                <div class="flex flex-wrap">
                    <img class="w-1/2 p-1" src="${item.src1}" alt="">
                    <img class="w-1/2 p-1" src="${item.src2}" alt="">
                    <img class="w-1/2 p-1" src="${item.src3}" alt="">
                    <img class="w-1/2 p-1" src="${item.src4}" alt="">
                </div>
                <div class="w-full text-blue flex gap-1 justify-center items-center">
                    مشاهده همه
                    <img src="./Images/SVG/blueLeft-falsh.svg" alt="blueLeft-falsh">
                </div>
            </div>`;
    });

    const container = document.querySelector(".clientTasteItems");
    if (container) {
      container.innerHTML = ClientTasteItem.join("");
    } else {
      console.error("Element with class 'clientTasteItems' not found.");
    }
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default clientTaste;
