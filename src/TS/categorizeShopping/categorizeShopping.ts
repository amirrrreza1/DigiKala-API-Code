import dataFetcher from "../dataFetcher";

const categorizeShopping = async () => {
    try {
    let data = await dataFetcher("/categorizeShopping");
        const CategorizeShoppingItem = data.map((item: any) => {
          return `<div class="w-[25%] lg:w-[20%] xl:w-[12.5%] flex flex-col justify-between
       items-center gap-[10px]">
          <img class="w-[60px] lg:w-[80px] xl:w-[90px] h-[60px] lg:h-[80px] xl:h-[90px] " src="${item.src}" alt="${item.alt}">
          <div class="text-[14px] w-[80%] h-[50px] text-center ">${item.text}</div>
        </div>`;
        });
      
    document.querySelector(".categorizeShoppingItems")!.innerHTML =
      CategorizeShoppingItem.join("");
  } catch (error) {
    console.log((error as Error ).message);
  }
};

export default categorizeShopping;