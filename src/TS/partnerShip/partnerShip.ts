import dataFetcher from "../dataFetcher";

const partnerShip = async () => {
  try {
    let data = await dataFetcher("/partnerShip");
        const PartnerShip = data.map((item: any) => {
          return `<div class="w-[48%] lg:w-[24%] overflow-hidden flex justify-center items-center ">
        <img class="rounded-[20px]" src="${item.src}" alt="${item.alt}">
      </div>`;
        });

document.querySelector(".partnerShip")!.innerHTML = PartnerShip.join("");  } catch (error) {
    console.log((error as Error).message);
  }
};

export default partnerShip;