
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
      `${process.env.NEXT_PUBLIC_API_URL}university/index?lang=${lang}`
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


// webinars 
export const getWebinars = async (
  lang: string | string[],
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}webinar/index?lang=${lang}`
    );

    const response = await res.json();
    return response;
  } catch (error) {
    console.log("[getUnivercities]", error);
    throw new Error("get Categories error");
  }
};

export const getFeaturedWebinar = async (lang: string | string[]) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}webinar/featured?lang=${lang}`
    );

    const response = await res.json();
    return response;
  } catch (error) {
    console.log("[getUnivercities]", error);
    throw new Error("get Categories error");
  }
};