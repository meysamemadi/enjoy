"use server"

import { auth } from "@/auth";
import axiosInstance from "@/lib/axios";
import axios from "axios";



export const reservationOfTourLeader = async (data: any) => {
    try {
        const response = await axiosInstance.post('haveyourowntrip/form/reservation-of-tour-leader', data)
        return response.data
    } catch (error) {
        console.log(error)
        return {
            status: false,
            error
        }
    }
}

export const vipPlusForm = async (data:any) => {
    try {

        const response = await axiosInstance.post('haveyourowntrip/form/vip-plus',data)
        return response.data
        
    } catch (error) {
        console.log(error)
        return {
            status: false,
            error
        }
    }
}


export const residenceReservationsForm = async (data:any) => {
    try {

        const response = await axiosInstance.post('haveyourowntrip/form/residence-reservations',data)
        return response.data
        
    } catch (error) {
        console.log(error)
        return {
            status: false,
            error
        }
    }
}


export const restuarantReservationsForm = async (data:any) => {
    try {

        const response = await axiosInstance.post('haveyourowntrip/form/restuarant-reservations',data)
        return response.data
        
    } catch (error) {
        console.log(error)
        return {
            status: false,
            error
        }
    }
}

