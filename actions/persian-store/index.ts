"use server"

import axiosInstance from "@/lib/axios";

export const getParentsCategories = async (lang: string) => {

  try {
    // Construct the base URL
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}store/category/parent?lang=${lang}`;


    // Fetch data from the constructed URL
    const res = await fetch(baseUrl, {
      cache: "no-cache"
    });

    // Check if the response status is OK (status code 200)
    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.statusText}`);
    }

    // Parse the response data as JSON
    const response = await res.json();

    return response;

  } catch (error) {
    console.error("[getStoreList]", error);
    throw new Error("Failed to fetch getStoreList data");
  }

}

export const getHomeProducts = async (lang: string) => {

  try {
    // Construct the base URL
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}store/product/home?lang=${lang}`;


    // Fetch data from the constructed URL
    const res = await fetch(baseUrl, {
      cache: "no-cache"
    });

    // Check if the response status is OK (status code 200)
    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.statusText}`);
    }

    // Parse the response data as JSON
    const response = await res.json();

    return response;

  } catch (error) {
    console.error("[getStoreList]", error);
    throw new Error("Failed to fetch getStoreList data");
  }

}

export const getHomeLuxury = async (lang: string) => {

  try {
    // Construct the base URL
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}store/product/luxury-home?lang=${lang}`;


    // Fetch data from the constructed URL
    const res = await fetch(baseUrl, {
      cache: "no-cache"
    });

    // Check if the response status is OK (status code 200)
    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.statusText}`);
    }

    // Parse the response data as JSON
    const response = await res.json();

    return response;

  } catch (error) {
    console.error("[getStoreList]", error);
    throw new Error("Failed to fetch getStoreList data");
  }

}

export const getHomeSpecial = async (lang: string) => {

  try {
    // Construct the base URL
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}store/product/special-home?lang=${lang}`;


    // Fetch data from the constructed URL
    const res = await fetch(baseUrl, {
      cache: "no-cache"
    });

    // Check if the response status is OK (status code 200)
    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.statusText}`);
    }

    // Parse the response data as JSON
    const response = await res.json();

    return response;

  } catch (error) {
    console.error("[getStoreList]", error);
    throw new Error("Failed to fetch getStoreList data");
  }

}


export const getProductsByCategory = async (lang: string , id: number) => {

  try {
    // Construct the base URL
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}store/product/index?lang=${lang}&id=${id}`;


    // Fetch data from the constructed URL
    const res = await fetch(baseUrl, {
      cache: "no-cache"
    });

    // Check if the response status is OK (status code 200)
    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.statusText}`);
    }

    // Parse the response data as JSON
    const response = await res.json();

    return response;

  } catch (error) {
    console.error("[getStoreList]", error);
    // throw new Error("Failed to fetch getStoreList data");
  }

}

export const getProductById = async (lang: string , id: number) => {

  try {
    // Construct the base URL
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}store/product/single?lang=${lang}&id=${id}`;


    // Fetch data from the constructed URL
    const res = await fetch(baseUrl, {
      cache: "no-cache"
    });

    // Check if the response status is OK (status code 200)
    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.statusText}`);
    }

    // Parse the response data as JSON
    const response = await res.json();

    return response;

  } catch (error) {
    console.error("[getStoreList]", error);
    // throw new Error("Failed to fetch getStoreList data");
  }

}

export const createOrder = async (data: any) => {
  try {

    const response = await axiosInstance.post('store/order/create', data)
    return response.data

  } catch (error) {
    console.log(error)
    return {
      status: false,
      error
    }
  }
}

export const majorShopping = async (data: any) => {

  try {

    const response = await axiosInstance.post('store/form/major-shopping', data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    return response.data

  } catch (error) {
    console.log(error)
    return {
      status: false,
      error
    }
  }

}

export const youWant = async (data: any) => {

  try {

    const response = await axiosInstance.post('store/form/you-want', data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    return response.data

  } catch (error) {
    console.log(error)
    return {
      status: false,
      error
    }
  }

}
