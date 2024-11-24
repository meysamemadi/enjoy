"use server"

import { auth } from "@/auth";
import axios from "axios";

export const createRestaurantReservation = async (values: any) => {


    try {

       return axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}haveyourowntrip/form/restaurant-reservation`, values)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                // Handle upload error here
                console.log(error);
            });

    } catch (error) {


        console.log(error)
        return {
            status:false,
            error
        }

    }





}