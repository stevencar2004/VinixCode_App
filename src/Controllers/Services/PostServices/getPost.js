import axios from "axios";

export const getPostById = async (id) => {
  const res = await axios.get(`http://front-test.vinixcode.cloud:8000/api/v1/post/${id}`);
  return res;
};
