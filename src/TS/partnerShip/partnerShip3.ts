import dataFetcher from "../dataFetcher";

const partnerShip3 = async () => {
  try {
    let data = await dataFetcher("/partnerShip3");
    const PartnerShip3 = data.map((item: any) => {
      return `<div class="w-full lg:w-[48%]">
        <img class="rounded-[20px] m-auto" src="${item.src}" alt="${item.alt}">
      </div>`;
    });
    document.querySelector(".partnerShip3")!.innerHTML = PartnerShip3.join("");
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default partnerShip3;