import { customFetch } from "./customFetch";

const baseFetch = (baseUrl?: string) => {
  return {
    async get<T>(path: string, params = {}): Promise<T> {
      const url = `${baseUrl}/${path}`;
      return customFetch.get<T>(url, params);
    },
    async post<T>(path: string, body: any, params = {}): Promise<T> {
      const url = `${baseUrl}/${path}`;
      return customFetch.post<T>(url, body, params);
    },
    async patch<T>(path: string, body: any, params = {}): Promise<T> {
      const url = `${baseUrl}/${path}`;
      return customFetch.patch<T>(url, body, params);
    },
  };
};
export const requestInvoice = baseFetch(
  "https://reso-invoice.onrender.com/api/v1"
);
export const requestMock = baseFetch(
  "https://660bbdb3ccda4cbc75dd950a.mockapi.io/api"
);
