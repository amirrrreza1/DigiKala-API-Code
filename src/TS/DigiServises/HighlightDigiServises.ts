import dataFetcher from "../dataFetcher";

const HighlightDigiServeses = async () => {
  try {
    let data = await dataFetcher("/HighlightDigiSevices");
    const HighlightDigiServeses = data.map((item: any , index:Number) => {
        return `
      <div class="w-[80px] flex flex-col justify-center items-center gap-2 cursor-pointer mb-2">
        <img src="${item.src}" alt="HighlightDigiServeses ${index}" width="52">
        <div class="text-center text-[12px] w-full lg:w-[70%] m-auto">${item.text}</div>
      </div>
      `;
    });

    const container = document.querySelector(".HighlightDigiServeses");
    if (container) {
      container.innerHTML = HighlightDigiServeses.join("");
    } else {
      console.error("Element with class 'HighlightDigiServeses' not found.");
    }
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default HighlightDigiServeses;
