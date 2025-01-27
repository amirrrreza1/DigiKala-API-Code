import dataFetcher from "../dataFetcher";
import { GuideType } from "../global";

const guide = async (): Promise<void> => {
  try {
    let data = await dataFetcher("/guide");
    const items = data.map((item: GuideType) => {
      return `<a class="text-[#82858B]" href="${item.href}">
          ${item.text}
        </a>`;
    });

    document.querySelector(".guide")!.innerHTML = items.join("");
    document.querySelector(".guidemobile")!.innerHTML = items.join("");
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default guide;
