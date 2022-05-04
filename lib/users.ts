/*eslint-disable */
import axios from 'axios';

export const baseUrl = process.env.BASE_URL

export function getUsers(url: string){
  return axios.get(url).then( response => response.data);
}