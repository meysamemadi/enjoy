import {Locale} from "@/i18n-config";


export const getCategories = async (lang:Locale) => {
    try {
        // Construct the base URL
        const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}business/category/index?lang=${lang}`;


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

export const getHomeTours = async (lang:Locale) => {
    try {
        // Construct the base URL
        const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}business/tour/our-last-tours?lang=${lang}`;


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
        console.error("[getHomeTours]", error);
        throw new Error("Failed to fetch getStoreList data");
    }
}