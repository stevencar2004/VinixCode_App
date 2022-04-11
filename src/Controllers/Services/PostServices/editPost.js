import axios from "axios";

export const editPost = async (id, token, data) => {
  const res = await axios.put(
    `http://front-test.vinixcode.cloud:8000/api/v1/post/${id}`,
    {
      id: id,
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
