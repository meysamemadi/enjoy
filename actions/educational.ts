import { UniversitySuccess, Webinar } from "@/types";

export const getCategories = async (lang: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}category/univercity?lang=${lang}`
    );

    const response = await res.json();
    console.log(response)
    return response;
  } catch (error) {
    console.log("[getCategories]", error);
    throw new Error("get Categories error");
  }
};

export const getUniversities = async (lang: string | string[]) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}university/index?lang=${lang}`,
      {
        cache: "no-cache",
      }
    );

    const response = await res.json();
    return response;
  } catch (error) {
    console.log("[getUnivercities]", error);
    throw new Error("get Categories error");
  }
};

export const getUniversitiesByCategory = async (
  lang: string | string[],
  category: string | string[] | null | undefined
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}university/index-by-category?lang=${lang}&category=${category}`,
      {
        cache: "no-cache",
      }
    );

    const response = await res.json();
    return response;
  } catch (error) {
    console.log("[getUnivercities]", error);
    throw new Error("get Categories error");
  }
};

export const getUniversity = async (lang: string | string[], id: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}university/single?lang=${lang}&id=${id}`,
      {
        cache: "no-cache",
      }
    );

    const response = await res.json();
    return response;
  } catch (error) {
    console.log("[getUnivercity]", error);
    throw new Error("get Univercity error");
  }
};

// webinars
export const getWebinars = async (lang: string | string[]) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}webinar/index?lang=${lang}`,
      {
        cache: "no-cache",
      }
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
      `${process.env.NEXT_PUBLIC_API_URL}webinar/featured?lang=${lang}`,
      {
        cache: "no-cache",
      }
    );

    const response = await res.json();
    return response;
  } catch (error) {
    console.log("[getUnivercities]", error);
    throw new Error("get Categories error");
  }
};

export const getWebinar = async (lang: string, id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}webinar/single?lang=${lang}&id=${id}`
    );

    const response: Webinar | false = await res.json();
    return response;
  } catch (error) {
    console.log("[getWebinar]", error);
    throw new Error("get webinar error");
  }
};

export const getUniversitySuccessLimited = async (lang: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}university/university-success-limit?lang=${lang}`
    );

    const response: UniversitySuccess[] | false = await res.json();
    return response;
  } catch (error) {
    console.log("[getWebinar]", error);
    throw new Error("get webinar error");
  }
};

export const getUniversitySuccess = async (
  lang: string,
  page: any
) => {
  try {
    if (page === undefined) {
      page = "1";
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}university/university-success?lang=${lang}&page=${page}`,
      {
        cache: "no-cache",
      }
    );

    const response = await res.json();

    return response;
  } catch (error) {
    console.log("[getWebinar]", error);
    throw new Error("get webinar error");
  }
};
