import dataFetcher from "../dataFetcher";

const iconItems = async (): Promise<void> => {
  try {
    let data = await dataFetcher("/icons");
    const iconItems = data
      .map((item: any) => {
        return `<a href="#"
        class="w-[20%] lg:w-[10%] md:w-[18%] h-fit p-[20px] flex justify-between items-center flex-col gap-y-2">
        <img width="52px" height="52px" src="${item.src}" alt="${item.alt}">
        <div class="h-[40px] text-[12px] text-center">${item.text}</div>
    </a>`;
      })
      .join("");
    document
      .querySelector(".iconItems")!
      .insertAdjacentHTML("afterbegin" , iconItems);
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default iconItems;
