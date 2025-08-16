"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TicketSection } from './ticket-section'
import { VisaSection } from './visa-section'

export const FormContainer = () => {



    return (
        <div className=' container mx-auto mt-10'>

            <Tabs defaultValue="visa" className="">
                <TabsList className="grid w-full grid-cols-2 gap-x-4 bg-transparent">
                    <TabsTrigger
                        className="w-full h-[56px] px-4 rounded-none text-base md:text-[20px] font-bold text-[#A07E62] bg-white relative    custom-tab-trigger  "
                        value="visa"
                    >
                        visa
                    </TabsTrigger>
                    <TabsTrigger
                        className="w-full h-[56px] px-4 rounded-none text-base md:text-[20px] font-bold text-[#A07E62] bg-white relative    custom-tab-trigger  "
                        value="ticket"
                    >
                        ticket
                    </TabsTrigger>
                </TabsList>
                <TabsContent className='pt-10' value="visa">
                    <VisaSection />
                </TabsContent>
                <TabsContent className='pt-10' value="ticket">
                    <TicketSection />
                </TabsContent>
            </Tabs>

        </div>
    )
}
