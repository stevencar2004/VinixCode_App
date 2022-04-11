// import axios from "axios";
import axios from "axios";
// import { adapterDataLogin } from "../../Adapters/dataLogin";

export const loginUser = async (loginForm) => {
  const res = await axios.post("http://front-test.vinixcode.cloud:8000/api/auth/login", {
    email: loginForm.email,
    password: loginForm.password,
  });

  return res;
};
