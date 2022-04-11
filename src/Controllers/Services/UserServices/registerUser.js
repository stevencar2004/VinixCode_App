import axios from "axios";

export const registerUser = async (formData) => {
  const res = await axios.post(
    "http://front-test.vinixcode.cloud:8000/api/auth/register",
    {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.password_confirmation,
    }
  );

  return res;
};
