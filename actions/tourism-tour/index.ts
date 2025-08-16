"use server"

import {Tour} from "@/types";

export const getNext2Month = async (lang: string) => {

    try {

        // Construct the base URL
        const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}tourismtour/tour/next-tour?lang=${lang}`;


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
        console.error("[getNext2Month]", error);
        // throw new Error("Failed to fetch getNext2Month data");
    }

}

export const getAllCategories = async (lang: string) => {
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}tourismtour/category/index?lang=${lang}`;

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

}


export const getAllSpecialTours = async (lang: string) => {
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}tourismtour/tour/special-tours?lang=${lang}`;

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
}

export const getAllOneDayTours = async (lang: string) => {
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}tourismtour/tour/one-day-tour?lang=${lang}`;

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
}


export const getAllCities = async (lang: string) => {
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}tourismtour/tour/city?lang=${lang}`;

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
}

export const getSingleTour = async (
    lang: string,
    id: number
) => {
    try {
        // Construct the base URL
        const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}tourismtour/tour/single?lang=${lang}&id=${id}`;


        // Fetch data from the constructed URL
        const res = await fetch(baseUrl,{
            cache:"no-cache"
        });

        // Check if the response status is OK (status code 200)
        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }

        // Parse the response data as JSON
        const response = await res.json();

        return response;

    } catch (error) {
        console.error("[getAccommodations]", error);
        // throw new Error("Failed to fetch accommodation data");
    }
};