import { API_URL } from "./config.js";
export const getJson = async function () {
  const response = await fetch(`${API_URL}`);
  const data = await response.json();
  return data;
};
