"use client";
import { useState, useEffect } from 'react'
import Image from "next/image";
interface ImageCarouselProps {
    images: string[]
}

function ImageCarousel({ images }: ImageCarouselProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [autoScrollImages, setAutoScrollImages] = useState(true)

    // Auto-scroll effect
    useEffect(() => {
        if (!autoScrollImages) return

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length)
        }, 5000) // Change image every 5 seconds

        return () => clearInterval(interval) // Cleanup on unmount
    }, [images.length, autoScrollImages])

    const nextImage = () => {
        setAutoScrollImages(false) // Stop auto-scroll when user clicks
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setAutoScrollImages(false) // Stop auto-scroll when user clicks
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl bg-gray-200 max-h-fit">
                {/* Images (this moves) */}
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div
                            key={image}
                            className="relative min-w-full aspect-video flex-shrink-0"
                        >
                            <Image
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>

                {/* Left/Right Navigation (this does NOT move) */}
                <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2
               bg-white/80 hover:bg-white text-gray-800
               p-3 rounded-full shadow-lg z-10 cursor-pointer"
                    aria-label="Previous image"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2
               bg-white/80 hover:bg-white text-gray-800
               p-3 rounded-full shadow-lg z-10 cursor-pointer"
                    aria-label="Next image"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Image Indicators */}
            <div className="hidden lg:flex justify-center gap-2 mt-2 mb-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setAutoScrollImages(false) // Stop auto-scroll when user clicks
                            setCurrentImageIndex(index)
                        }}
                        className={`hover:cursor-pointer w-3 h-3 rounded-full transition ${index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </div >
    )
}

export default ImageCarousel
