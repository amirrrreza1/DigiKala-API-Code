const baseUrl = "https://digi-api.vercel.app";

const dataFetcher = async (apiRoute: string) => {
  try {
    const response = await fetch(`${baseUrl}${apiRoute}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
};


export default dataFetcher;
