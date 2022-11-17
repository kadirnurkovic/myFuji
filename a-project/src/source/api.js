import axios from "axios";

export const getImages = async (page) => {
  const apiRoot = "https://api.unsplash.com";

  const res = await axios.get(
    `https://kitsu.io/api/edge/anime?page[limit]=12&page[offset]=${page}`
  );
  return res.data;
};
