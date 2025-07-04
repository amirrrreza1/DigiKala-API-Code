import dataFetcher from "../dataFetcher";
import { CustomerType } from "../global";

const customer = async (): Promise<void> => {
  try {
    let data = await dataFetcher("/customer");
    const items = data.map((item: CustomerType) => {
      return `<a class="text-[#82858B]" href="${item.href}">
          ${item.text}
        </a>`;
    });

    document.querySelector(".customer")!.innerHTML = items.join("");
    document.querySelector(".customerMobile")!.innerHTML = items.join("");
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default customer;
