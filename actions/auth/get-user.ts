"use server"

import axios from "axios";


export const getUserByEmail = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}user/get-user-by-email`, {
      email,
      password,
    })
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log("eeeeeeeee", error);
    });
};