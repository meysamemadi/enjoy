export const getServices = async (lang: string) => {
  try {

    
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}medical/services/index?lang=${lang}`,
    );

    const response = await res.json();
    return response;
  } catch (error) {
    console.log("[getCategories]", error);
    throw new Error("get Categories error");
  }
};


export const getCities = async (lang: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}medical/city/index?lang=${lang}`
    );

    const response = await res.json();
    return response;
  } catch (error) {
    console.log("[getCategories]", error);
    throw new Error("get Categories error");
  }
};

