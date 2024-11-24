"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Color {
    name: string
    class: string
    selectedClass: string
}

const colors: Color[] = [
    { name: 'White', class: 'bg-[#440305]', selectedClass: 'ring-[#440305]' },
    { name: 'Gray', class: 'bg-[#F6BD50]', selectedClass: 'ring-[#F6BD50]' },
    { name: 'Black', class: 'bg-[#B87719]', selectedClass: 'ring-[#B87719]' },
]

export const Color = () => {


    const [selectedColor, setSelectedColor] = useState(colors[0])

    return (
        <div className="my-6">
            <h3 className="text-sm font-bold  leading-[200%] text-[#594636]">Color</h3>
            <div className="flex items-center space-x-3 mt-2">
                {colors.map((color) => (
                    <Button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={cn(`w-8 h-8 relative p-0 rounded-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary `,
                            selectedColor.name === color.name ? "after:absolute after:content-[''] after:bottom-[-12px] after:left-0 after:right-0 after:h-0.5 after:bg-[#9F7C63] after:w-full before:absolute before:content-[''] before:bottom-[-16px] before:left-1/2 before:-translate-x-1/2 before:border-x-[5px] before:border-x-transparent before:border-t-[5px] before:border-t-[#9F7C63]"
                      : ""
                            
                        )}
                        aria-label={`Select ${color.name} color`}
                    >
                        <span className={`w-full h-full flex items-center justify-center ${color.class}`}>
                            {selectedColor.name === color.name && (
                                <Check className={`h-5 w-5 `} />
                            )}
                        </span>
                    </Button>
                ))}
            </div>
        </div>
    )
}
