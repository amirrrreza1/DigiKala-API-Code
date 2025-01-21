import dataFetcher from "../dataFetcher";

const features = async (): Promise<void> => {
  try {
    let data = await dataFetcher("/features");
    const items = data.map((item: any) => {
      return `<div class="w-[20%] flex flex-col justify-center items-center">
                <img src="${item.src}" alt="${item.alt}">
                <div class="text-black/70 text-[13px]">${item.text}</div>
            </div>`;
    });

    document.querySelector(".features")!.innerHTML = items.join("");
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default features;