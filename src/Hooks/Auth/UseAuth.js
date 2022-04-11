import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";

export const UseAuth = () => {
  const { activeSession, setActiveSession } = useContext(Context);
  let navigate = useNavigate();

  useEffect(() => {
    try {
      const user = localStorage.getItem("USER");
      const token = localStorage.getItem("Token");
      if (!user && !token) {
        navigate("/login");
        setActiveSession(false);
      } else {
        setActiveSession(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, [activeSession]);
};
