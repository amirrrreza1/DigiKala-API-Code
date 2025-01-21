import dataFetcher from "../dataFetcher";

const partnerShip2 = async () => {
  try {
    let data = await dataFetcher("/partnerShip2");
        const PartnerShip2 = data.map((item: any) => {
          return `<div class="w-full lg:w-[48%]">
        <img class="rounded-[20px] m-auto" src="${item.src}" alt="${item.alt}">
      </div>`;
        });
    document.querySelector(".partnerShip2")!.innerHTML = PartnerShip2.join("");
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default partnerShip2;