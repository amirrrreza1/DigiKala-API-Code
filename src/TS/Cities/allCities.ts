import dataFetcher from "../dataFetcher";
import { AllCityType } from "../global";
const allCities = async () => {
  try {
    let data:AllCityType[] = await dataFetcher("/allCities");
    const AllCities = data.map((item: any) => {
      return `        <div class="city-item text-[16px]  flex justify-between items-center cursor-pointer" data-city="${item.city}" data-area="${item.area}">
          <div class="">${item.area} <span class="text-black/60">در ${item.city}</span>
          </div>
          <img src="./Images/SVG/ToRightIcon.svg" alt="ICON">
        </div>
        <hr class="my-2">`;
    });

    const container = document.querySelector(".allCiteis");
    if (container) {
      container.innerHTML = AllCities.join("");
    } else {
      console.error("Element with class 'allCiteis' not found.");
    }

    const cityItems = document.querySelectorAll<HTMLDivElement>(
      ".allCiteis .city-item"
    );

    const deliveryCityDivs =
      document.querySelectorAll<HTMLDivElement>(".deliveryCity");

    const HeaderToggleDiv1 = document.getElementById("HeaderToggleDiv1");
    const HeaderToggleDiv2 = document.getElementById("HeaderToggleDiv2");

    if (deliveryCityDivs.length) {
      cityItems.forEach((item) => {
        item.addEventListener("click", () => {
          const selectedCity = item.getAttribute("data-city") || "شهر ناشناخته";
          const selectedArea = item.getAttribute("data-area") || "";
          const textContent = `ارسال به ${selectedArea} در ${selectedCity}`;

          deliveryCityDivs.forEach((deliveryDiv) => {
            deliveryDiv.textContent = textContent;
          });

          HeaderToggleDiv1?.classList.add("hidden"); // پنهان کردن دیو اول
          HeaderToggleDiv2?.classList.add("hidden"); // پنهان کردن دیو دوم
        });
      });
    } else {
      console.error("المان‌های deliveryCity یافت نشد.");
    }
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default allCities;
