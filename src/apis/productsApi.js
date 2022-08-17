import axios from "axios";
const url = "https://test-api-jbfp.herokuapp.com/api/products";

export const getProducts = async () => {
  const resp = await axios.get(url);
  return resp;
};
