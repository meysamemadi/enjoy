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

export const getService = async (lang: string , id: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}medical/services/single?lang=${lang}&id=${id}`
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

export const getCity = async (lang:string , id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}medical/city/single?lang=${lang}&id=${id}`
    );

    const response = await res.json();
    return response;
  } catch (error) {
    console.log("[getCategories]", error);
    throw new Error("get Categories error");
  }
}


export const getCategories = async (lang: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}medical/category/index?lang=${lang}`
    );

    const response = await res.json();
    return response;
  } catch (error) {
    console.log("[getCategories]", error);
    throw new Error("get Categories error");
  }
};


export const getDoctors = async (
  lang: string,
  category: string | string[] | undefined
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}medical/doctor/index?lang=${lang}&category=${category}`
    );

    const response = await res.json();
    return response;
  } catch (error) {
    console.log("[getCategories]", error);
    throw new Error("get Categories error");
  }
};


export const getDoctor = async (
  lang: string,
  id: string
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}medical/doctor/single?lang=${lang}&id=${id}`
    );

    const response = await res.json();
    return response;
  } catch (error) {
    console.log("[getDoctor]", error);
    throw new Error("get doctor error");
  }
};