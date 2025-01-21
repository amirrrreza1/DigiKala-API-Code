import dataFetcher from "../dataFetcher";

const allCities = async () => {
  try {
    let data = await dataFetcher("/allCities");
    const AllCities = data.map((item: any) => {
      return `        <div class="city-item text-[16px]  flex justify-between items-center cursor-pointer">
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
      console.error("Element with class 'clientTasteItems' not found.");
    }
    const cityItems = document.querySelectorAll<HTMLDivElement>(
      ".allCiteis .city-item"
    );

    const deliveryCityDiv =
      document.querySelector<HTMLDivElement>(".deliveryCity");

    const HeaderToggleDiv1 = document.getElementById("HeaderToggleDiv1");
    const HeaderToggleDiv2 = document.getElementById("HeaderToggleDiv2");

    if (deliveryCityDiv) {
      cityItems.forEach((item) => {
        item.addEventListener("click", () => {
          const selectedCity = item.textContent?.trim() || "شهر ناشناخته";
          deliveryCityDiv.textContent = `ارسال به ${selectedCity}`;
          HeaderToggleDiv1?.classList.add("hidden"); // پنهان کردن دیو اول
          HeaderToggleDiv2?.classList.add("hidden"); // پنهان کردن دیو دوم
        });
      });
    } else {
      console.error("المان deliveryCity یافت نشد.");
    }
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default allCities;
