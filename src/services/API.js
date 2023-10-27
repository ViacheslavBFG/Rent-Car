import axios from "axios";
export const BASE_URL = "https://6501ec99736d26322f5c7e6f.mockapi.io";
export let page = 1;
export const limit = 12;

export const fetchAPI = async (page) => {
  const data = await axios.get(`${BASE_URL}/adverts`, {
    params: {
      page,
      limit: 12,
    },
  });
  return data;
};
