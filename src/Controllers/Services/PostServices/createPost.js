import axios from "axios";

export const createPost = async (token, data) => {
  console.log(token, data);
  const res = await axios.post(
    "http://front-test.vinixcode.cloud:8000/api/v1/post",
    {
      title: data.title,
      body: data.body,
    },
    {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }
  );
  return res;
};
