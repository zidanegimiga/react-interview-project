/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from "axios";

export const baseUrl = process.env.BASE_URL;

export function getPosts(url: string) {
  return axios.get(url).then((response) => response.data);
}
