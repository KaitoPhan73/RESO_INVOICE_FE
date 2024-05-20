// utils/customFetch.ts

const buildQueryString = (params: Record<string, any>): string => {
  return Object.entries(params)
    .filter(([_, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");
};

export const customFetch = {
  async get<T>(url: string, params = {}): Promise<T> {
    // Thêm generic type T
    const queryString = buildQueryString(params);
    const fullUrl = queryString ? `${url}?${queryString}` : url;
    console.log("fullUrl", fullUrl);
    try {
      const response = await fetch(fullUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Failed to fetch data");
    }
  },

  async post<T>(url: string, body: any, params = {}): Promise<T> {
    // Thêm generic type T
    const queryString = buildQueryString(params);
    const fullUrl = queryString ? `${url}?${queryString}` : url;

    try {
      const response = await fetch(fullUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        cache: "no-store",
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error posting data:", error);
      throw new Error("Failed to post data");
    }
  },

  async patch<T>(url: string, body: any, params = {}): Promise<T> {
    // Thêm generic type T
    const queryString = buildQueryString(params);
    const fullUrl = queryString ? `${url}?${queryString}` : url;

    try {
      const response = await fetch(fullUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        cache: "no-store",
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error patching data:", error);
      throw new Error("Failed to patch data");
    }
  },
};
