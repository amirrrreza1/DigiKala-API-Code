import dataFetcher from "../dataFetcher";
import { WithDigikalaType } from "../global";

const withDigikala = async (): Promise<void> => {
  try {
    let data: WithDigikalaType[] = await dataFetcher("/withDigikala");
    const items = data.map((item: any) => {
      return (
        `<a class="text-[#82858B]" href="${item.href}">
          ${item.text}
        </a>`
      );
    });

    document.querySelector(".withDigikala")!.innerHTML = items.join("");
    document.querySelector(".withDigikalaMobile")!.innerHTML = items.join("");
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default withDigikala;
