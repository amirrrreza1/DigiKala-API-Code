import dataFetcher from "../dataFetcher";
import { MegaMenuItemType } from "../global";

const megaMenu = async () => {
  try {
    let data:MegaMenuItemType[] = await dataFetcher("/megaMenu");

    // ساخت HTML برای آیتم‌های منو
    const Items = data.map((item: any, index: number) => {
      return `
      <div class="flex justify-start items-center p-1 ${
        index === 0
          ? "bg-white text-[#ED1944]"
          : "hover:bg-white hover:text-[#ED1944]"
      } cursor-pointer" id="item-${index}">
        <img src="${index === 0 ? item.srcHover : item.src}" alt="${
        item.id
      }" class="w-6 h-6 inline-block mr-2" id="srcChange-${index}">
        <div class="${item.id} p-2 text-[13px]">${item.text}</div>
      </div>`;
    });

    document.querySelector(".MegaMenuItems")!.innerHTML = Items.join("");

    // گرفتن المان item-details
    const itemDetailsDiv = document.getElementById("item-details");

    const setActiveItem = (index: number) => {
      const allItems = document.querySelectorAll(".MegaMenuItems > div");
      allItems.forEach((item, idx) => {
        const img = item.querySelector("img") as HTMLImageElement;
        if (idx === index) {
          item.classList.add("bg-white", "text-[#ED1944]");
          if (img) img.src = data[idx].srcHover;
        } else {
          item.classList.remove("bg-white", "text-[#ED1944]");
          if (img) img.src = data[idx].src;
        }
      });
    };

    const renderDetails = (item: any) => {
      if (!itemDetailsDiv) return;

      const newSection = document.createElement("div");
      newSection.innerHTML = `<a href class="text-sm font-semibold text-[#00C9E6] m-4 flex gap-1">
      همه محصولات ${item.text}
      <img src="./Images/SVG/toLeftArrowBlue.svg" alt="icon" class="arrow-icon" width="15">
      </a>`;

      let content = `
      <div class="flex gap-4 flex-wrap flex-col max-h-[700px]">
        ${item.subMenu
          .map(
            (subMenuItem: any) =>
              `<div class="mb-4 w-[220px]">
                <div class="font-bold text-lg flex items-center gap-1 hover:text-[#ED1944] boldtext-container cursor-pointer">
                  <span class="w-[2px] h-[17px] bg-[#ED1944] block"></span>
                  <div class="text-[14px]">${subMenuItem.boldtext}</div>
                  <img src="./Images/SVG/toLeftArrowBlack.svg" alt="icon" class="arrow-icon" width="20">
                </div>
                <div class="mt-2 space-y-1 pl-4 list-disc text-gray-600">
                  ${subMenuItem.items
                    .map(
                      (subItem: any) =>
                        `<div class="text-[11px] hover:text-[#ED1944] cursor-pointer leading-[22px]">${subItem.Subtext}</div>`
                    )
                    .join("")}
                </div>
              </div>`
          )
          .join("")}
      </div>`;

      newSection.innerHTML += content;

      itemDetailsDiv.innerHTML = "";
      itemDetailsDiv.appendChild(newSection);

      // مدیریت هاور برای تصاویر کلاس arrow-icon
      const boldtextContainers = itemDetailsDiv.querySelectorAll(
        ".boldtext-container"
      );
      boldtextContainers.forEach((container) => {
        const arrowIcon =
          container.querySelector<HTMLImageElement>(".arrow-icon");
        container.addEventListener("mouseenter", () => {
          if (arrowIcon) arrowIcon.src = "./Images/SVG/toLeftArrowRed.svg";
        });
        container.addEventListener("mouseleave", () => {
          if (arrowIcon) arrowIcon.src = "./Images/SVG/toLeftArrowBlack.svg";
        });
      });
    };

    // نمایش پیش‌فرض آیتم اول
    setActiveItem(0);
    renderDetails(data[0]);

    // افزودن Event Listener برای هر آیتم
    data.forEach((item: any, index: number) => {
      const element = document.getElementById(`item-${index}`);

      element?.addEventListener("mouseenter", () => {
        // تنظیم آیتم جدید به عنوان active
        setActiveItem(index);
        renderDetails(item);
      });
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default megaMenu;
