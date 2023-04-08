import { instance } from './instance';

export const postService = async <D, T>(url: string, data: D): Promise<T> => {
  const res = await instance.post(url, data);
  return res.data;
};

export const getService = async <T>(url: string): Promise<T> => {
  const res = await instance.get(url);
  return res.data;
};
