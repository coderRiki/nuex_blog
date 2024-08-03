import { useFetch } from 'nuxt/app';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const httpRequest = (config: any) => {
  async function request(method: HttpMethod, url: string) {
    return await useFetch(url, {
      onRequest({ request, options }) {
        options.method = method;
        options.headers = config.headers || {};
        options.baseURL = config.baseURL;
      },
      onResponse({ request, response, options }) {},
    });
  }
  function get(url: string) {
    return request('GET', url);
  }
  return {
    get,
  };
};
