
export const getCategories = async (lang: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}category/univercity?lang=${lang}`
    );

    const response = await res.json();
    return response;
  } catch (error) {
    console.log("[getCategories]", error);
    throw new Error("get Categories error");
  }
};

export const getUniversities = async (
  lang: string | string[],
  category: string | string[] | null | undefined
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}university/index?lang=${lang}&category=${category}`
    );

    const response = await res.json();
    return response;
  } catch (error) {
    console.log("[getUnivercities]", error);
    throw new Error("get Categories error");
  }
};


export const getUniversity = async (
  lang: string | string[],
  id: number
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}university/single?lang=${lang}&id=${id}`
    );

    const response = await res.json();
    return response;
  } catch (error) {
    console.log("[getUnivercity]", error);
    throw new Error("get Univercity error");
  }
};
