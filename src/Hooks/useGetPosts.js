import React, { useEffect, useState } from "react";
import { getListPosts } from "../Controllers/Services/PostServices/getPosts";

export const useGetPosts = (token) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isErrorLoading, setErrorIsLoading] = useState(false);
  const [ListPosts, setListPosts] = useState([]);

  useEffect(() => {
    getListPosts(token)
      .then((res) => {
        console.log("RES:", res);
        setIsLoading(false);
        setListPosts(res.data);
      })
      .catch((error) => {
        setErrorIsLoading(true);
        console.log("entro");
      });
  }, []);

  return { ListPosts, isLoading, isErrorLoading };
};
