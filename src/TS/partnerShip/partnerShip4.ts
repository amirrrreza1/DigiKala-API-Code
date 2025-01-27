import dataFetcher from "../dataFetcher";
import { partnerShipType } from "../global";

const partnerShip4 = async () => {
  try {
    let data= await dataFetcher("/partnerShip4");
    const PartnerShip4 = data.map((item: partnerShipType) => {
      return `<img src="${item.src}" alt="${item.alt}">`;
    });

    document.querySelector(".partnerShip4")!.innerHTML = PartnerShip4.join("");
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default partnerShip4;