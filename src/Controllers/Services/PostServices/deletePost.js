import axios from "axios";

export const deletePost = async (id) => {
  console.log(id);
  const res = await axios.delete(
    `http://front-test.vinixcode.cloud:8000/api/v1/post/${id}`
  );
  console.log(res);
  return res;
};
