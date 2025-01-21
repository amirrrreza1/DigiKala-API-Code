import dataFetcher from "../dataFetcher";

const mostPopularBrands = async () => {
  try {
    let data = await dataFetcher("/mostPopularBrands");
    const MostPopularBrandsItem = data.map((item: any) => {
      return `<swiper-slide class="flex justify-center items-center"><img class="w-[150px] h-[120px] py-[10px] px-[20px] object-contain" src="${item.src}" alt="${item.alt}"></swiper-slide>`;
    });

    document.querySelector(".popularBrandsSwiper")!.innerHTML =
      MostPopularBrandsItem.join("");
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default mostPopularBrands;