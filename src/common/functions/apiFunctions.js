import axios from "axios";

export async function getApi(url, limit, offset) {
  const res = await axios.get(`${url}?limit=${limit}&offset=${offset}`);
  return res.data;
}
export async function getResults(url, limit, offset, keyword) {
  const res = await axios.get(`${url}${keyword}`, {
    params: {
      limit: limit,
      offset: offset,
    },
  });
  return res.data;
}
