'use server'

import { revalidatePath } from "next/cache"

export type TicketFormData = {
  transportType: 'airplane' | 'train' | 'bus'
  firstName: string
  lastName: string
  country: string
  ticketType: string
  email: string
  phone: string
  origin: string
  destination: string
  departureDate: Date
  returnDate?: Date
  menCount: number
  womenCount: number
  childrenCount: number
  description: string
  documents?: File[]
}

export async function bookTicket(formData: FormData) {
  try {
    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Here you would typically:
    // 1. Validate the data
    // 2. Process the file upload
    // 3. Save to database
    // 4. Send confirmation email
    // etc.

    // Revalidate the page to show updated data
    revalidatePath('/book-ticket')

    return { success: true, message: 'Ticket booked successfully!' }
  } catch (error) {
    return { success: false, message: 'Failed to book ticket. Please try again.' }
  }
}

export async function IranBetter(lang: string | string[])
{
  try {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}province/know-index?lang=${lang}`
    );

    const response = await res.json();
    return response;
  } catch (error) {
    console.log("[getCategories]", error);
    throw new Error("get Categories error");
  }
}


export async function IranProvinceData(lang: string | string[])
{
  try {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}province/province-index?lang=${lang}`
    );

    const response = await res.json();
    return response;
  } catch (error) {
    console.log("[getCategories]", error);
    throw new Error("get Categories error");
  }
}

export async function getComments (domain:string = "main")
{
  try {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}comment/get-comments?domain=${domain}`
    );
    const response = await res.json();
    return response;
  } catch (error) {
    console.log("[getCategories]", error);
    throw new Error("get Categories error");
  }
}

