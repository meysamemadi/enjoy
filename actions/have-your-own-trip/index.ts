export const getAccommodationsCity = async (lang: string) => {

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}haveyourowntrip/accommodation/cities?lang=${lang}`
    );

    const response = await res.json();

    return response;

  } catch (error) {
    console.log("[getCities]", error);
    throw new Error("get Cities accommodation error");
  }

}

export const getAccommodationsCategory = async (lang: string) => {

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}haveyourowntrip/accommodation/categories?lang=${lang}`
    );

    const response = await res.json();

    return response;

  } catch (error) {
    console.log("[getcategory]", error);
    throw new Error("get category accommodation error");
  }

}

export const getAccommodations = async (
  lang: string,
  query: { [key: string]: string | string[] | undefined }
) => {
  try {
    // Construct the base URL
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}haveyourowntrip/accommodation/index?lang=${lang}`;

    // Function to build query string from object
    const buildQueryString = (query: { [key: string]: string | string[] | undefined }) => {
      return Object.entries(query)
        .filter(([_, value]) => value !== undefined) // Filter out undefined values
        .map(([key, value]) => {
          if (Array.isArray(value)) {
            // If value is an array, convert it to a comma-separated string
            return `${encodeURIComponent(key)}=${encodeURIComponent(value.join(','))}`;
          }
          // Convert value to string if it's not an array
          return `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`;
        })
        .join('&');
    };

    // Construct query string using the helper function
    const queryString = buildQueryString(query);

    // Append query string to base URL
    const url = queryString ? `${baseUrl}&${queryString}` : baseUrl;

    // Fetch data from the constructed URL
    const res = await fetch(url,{
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

export const getAccommodation = async (
  lang: string,
  id: number
) => {
  try {
    // Construct the base URL
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}haveyourowntrip/accommodation/single?lang=${lang}&id=${id}`;

 
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


export const getRestaurant = async (
  lang: string,
  id: number
) => {

  try {
    // Construct the base URL
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}haveyourowntrip/restaurant/single?lang=${lang}&id=${id}`;

 
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
    console.error("[getrestaurant]", error);
    // throw new Error("Failed to fetch restaurant data");
  }




};

export const getRestaurants = async (
  lang: string,
  query: { [key: string]: string | string[] | undefined }
) => {
  try {
    // Construct the base URL
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}haveyourowntrip/restaurant/index?lang=${lang}`;

    // Function to build query string from object
    const buildQueryString = (query: { [key: string]: string | string[] | undefined }) => {
      return Object.entries(query)
        .filter(([_, value]) => value !== undefined) // Filter out undefined values
        .map(([key, value]) => {
          if (Array.isArray(value)) {
            // If value is an array, convert it to a comma-separated string
            return `${encodeURIComponent(key)}=${encodeURIComponent(value.join(','))}`;
          }
          // Convert value to string if it's not an array
          return `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`;
        })
        .join('&');
    };

    // Construct query string using the helper function
    const queryString = buildQueryString(query);

    // Append query string to base URL
    const url = queryString ? `${baseUrl}&${queryString}` : baseUrl;


    // Fetch data from the constructed URL
    const res = await fetch(url,{
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
    console.error("[getRestaurants]", error);
    throw new Error("Failed to fetch getRestaurants data");
  }
};


export const getLocations = async (
  lang: string,
  query: { [key: string]: string | string[] | undefined }
) => {
  try {
    // Construct the base URL
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}haveyourowntrip/location/list?lang=${lang}`;

    // Function to build query string from object
    const buildQueryString = (query: { [key: string]: string | string[] | undefined }) => {
      return Object.entries(query)
        .filter(([_, value]) => value !== undefined) // Filter out undefined values
        .map(([key, value]) => {
          if (Array.isArray(value)) {
            // If value is an array, convert it to a comma-separated string
            return `${encodeURIComponent(key)}=${encodeURIComponent(value.join(','))}`;
          }
          // Convert value to string if it's not an array
          return `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`;
        })
        .join('&');
    };

    // Construct query string using the helper function
    const queryString = buildQueryString(query);

    // Append query string to base URL
    const url = queryString ? `${baseUrl}&${queryString}` : baseUrl;

    // Fetch data from the constructed URL
    const res = await fetch(url,{
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
    console.error("[getLocations]", error);
    throw new Error("Failed to fetch getLocations data");
  }
};


export const getPhotographers = async (lang: string) => {

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}haveyourowntrip/photographer/index?lang=${lang}`
    );

    const response = await res.json();

    return response;

  } catch (error) {
    console.log("[Photographer]", error);
    throw new Error("get Photographer  error");
  }

}


export const getReservationData = async (
  lang: string,
  query: { [key: string]: string | string[] | undefined }
) => {
  try {
    // Construct the base URL
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}haveyourowntrip/photographer/reservation-of-tour?lang=${lang}`;

    // Function to build query string from object
    const buildQueryString = (query: { [key: string]: string | string[] | undefined }) => {
      return Object.entries(query)
        .filter(([_, value]) => value !== undefined) // Filter out undefined values
        .map(([key, value]) => {
          if (Array.isArray(value)) {
            // If value is an array, convert it to a comma-separated string
            return `${encodeURIComponent(key)}=${encodeURIComponent(value.join(','))}`;
          }
          // Convert value to string if it's not an array
          return `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`;
        })
        .join('&');
    };

    // Construct query string using the helper function
    const queryString = buildQueryString(query);

    // Append query string to base URL
    const url = queryString ? `${baseUrl}&${queryString}` : baseUrl;

    // Fetch data from the constructed URL
    const res = await fetch(url,{
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
    console.error("[getLocations]", error);
    throw new Error("Failed to fetch getLocations data");
  }
};


export const getStoreCategories = async (
  lang: string,
) => {

  try {
    // Construct the base URL
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}haveyourowntrip/store/categories?lang=${lang}`;

 
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
    console.error("[getrestaurant]", error);
    // throw new Error("Failed to fetch restaurant data");
  }




};

export const getStoreList = async (
  lang: string,
) => {
  try {
    // Construct the base URL
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}haveyourowntrip/store/list?lang=${lang}`;


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
    console.error("[getStoreList]", error);
    throw new Error("Failed to fetch getStoreList data");
  }
};

export const getStores = async (
  lang: string,
  query: { [key: string]: string | string[] | undefined }
) => {
  try {
    // Construct the base URL
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}haveyourowntrip/store/index?lang=${lang}`;

    // Function to build query string from object
    const buildQueryString = (query: { [key: string]: string | string[] | undefined }) => {
      return Object.entries(query)
        .filter(([_, value]) => value !== undefined) // Filter out undefined values
        .map(([key, value]) => {
          if (Array.isArray(value)) {
            // If value is an array, convert it to a comma-separated string
            return `${encodeURIComponent(key)}=${encodeURIComponent(value.join(','))}`;
          }
          // Convert value to string if it's not an array
          return `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`;
        })
        .join('&');
    };

    // Construct query string using the helper function
    const queryString = buildQueryString(query);

    // Append query string to base URL
    const url = queryString ? `${baseUrl}&${queryString}` : baseUrl;

    // Fetch data from the constructed URL
    const res = await fetch(url,{
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
    console.error("[getStores]", error);
    // throw new Error("Failed to fetch accommodation data");
  }
};