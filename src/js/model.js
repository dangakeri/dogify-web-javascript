import { API_URL } from "./config";
import { getJson } from "./helpers";

export const state = { dogs: {} };

export const loadImages = async function () {
  try {
    const data = await getJson(`${API_URL}`);

    const { message } = data;
    // console.log(message);
    state.dogs = {
      dog: message,
      name: message.split("https://images.dog.ceo/breeds/")[1].split("/")[0],
    };
    console.log(state.dogs);
  } catch (error) {
    console.log(error);
  }
};
