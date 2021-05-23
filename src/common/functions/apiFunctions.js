import axios from "axios";

export async function getApi(url, limit, offset) {
  const res = await axios.get(`${url}?limit=${limit}&offset=${offset}`);
  return res.data;
}
