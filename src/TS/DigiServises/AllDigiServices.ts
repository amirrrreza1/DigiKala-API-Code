import dataFetcher from "../dataFetcher";

const allDigiServices = async () => {
  try {
    let data = await dataFetcher("/DigiServesec");
    const allDigiServices = data.map((item: any, index: Number) => {
      return `
      <div class=" w-[96%] lg:w-[48%] m-auto flex justify-between items-center p-3 border-[1px] border-[#B7BBBE] rounded-xl mb-3 cursor-pointer">
        <div class="flex justify-center items-center gap-3">
          <img src="${item.src}" alt="allServices ${index}" width="52">
          <div>${item.text}</div>
        </div>
        <img src="./Images/SVG/ToleftFlash.svg" alt="flash" class="h-[20px]">
      </div>
      `;
    });

    const container = document.querySelector(".allDigiServices");
    if (container) {
      container.innerHTML = allDigiServices.join("");
    } else {
      console.error("Element with class 'allDigiServices' not found.");
    }
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default allDigiServices;
