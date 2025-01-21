import dataFetcher from "../dataFetcher";

const readingBlog = async () => {
  try {
    let data = await dataFetcher("/readingBlog");
    const ReadingBlog = data.map((item: any) => {
      return `<div class="w-full lg:w-[24%] border-solid border-[0.5px] border-black/20 rounded-lg overflow-hidden mt-3">
        <img src="${item.src}" alt="${item.alt}">
        <div class="text-[12px] p-3 h-[60px] flex justify-center items-center">${item.text}</div>
      </div>`;
    });
    document.querySelector(".readingBlogItem")!.innerHTML =
      ReadingBlog.join("");
  } catch (error) {
    console.log((error as Error).message);
  }
};

export default readingBlog;