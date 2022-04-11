import axios from "axios";

export const getListPosts = async (token) => {
  try {
    const response = await axios.get(
      "http://front-test.vinixcode.cloud:8000/api/v1/post",
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
