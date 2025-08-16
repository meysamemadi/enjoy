"use client";

import { Messina_Serif } from "@/app/[lang]/font";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface PictureProps {
    gallery: string[];
}

const Picture = ({ gallery }: PictureProps) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = ""; // Restore scrolling
    };

    const navigateImage = (direction: "next" | "prev") => {
        if (direction === "next") {
            setCurrentImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
        } else {
            setCurrentImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
        }
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") navigateImage("next");
        if (e.key === "ArrowLeft") navigateImage("prev");
    };

    return (
        <div className="container my-6 md:my-8">
            <div className="relative mt-6 md:mt-8 py-2 border-b border-[#A07E624D]/30">
        <span
            className={cn(
                "text-lg md:text-[32px] font-semibold text-[#A07E62]",
                Messina_Serif.className
            )}
        >
          More Pictures
        </span>
            </div>

            <div className="grid mt-4 grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {gallery &&
                    gallery.map((pic, index) => (
                        <div
                            key={pic}
                            className="h-[265px] cursor-pointer transition-transform hover:scale-[1.02]"
                            onClick={() => openLightbox(index)}
                        >
                            <Image
                                className="w-full h-full object-cover rounded-md"
                                width={353}
                                height={265}
                                src={pic || "/placeholder.svg"}
                                alt={`gallery image ${index + 1}`}
                            />
                        </div>
                    ))}
            </div>

            {/* Lightbox */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                    onClick={closeLightbox}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    <div
                        className="relative max-w-[90vw] max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={gallery[currentImageIndex] || "/placeholder.svg"}
                            alt={`gallery image ${currentImageIndex + 1}`}
                            width={1200}
                            height={800}
                            className="max-h-[90vh] w-auto object-contain"
                        />

                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                            aria-label="Close lightbox"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {gallery.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigateImage("prev");
                                    }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigateImage("next");
                                    }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>

                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
                                    {currentImageIndex + 1} / {gallery.length}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Picture;