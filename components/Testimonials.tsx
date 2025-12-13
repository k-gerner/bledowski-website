"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../i18n/client";

interface Testimonial {
    quote: string;
    name: string;
    location: string;
}

function Testimonials() {
    const { t } = useTranslation("common");

    // Get testimonials from translations
    const testimonials = t("testimonials.items", { returnObjects: true }) as Testimonial[];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemWidth, setItemWidth] = useState(100); // percentage width of each item

    // Update item width based on screen size
    useEffect(() => {
        const updateWidth = () => {
            if (window.innerWidth >= 1024) setItemWidth(100 / 3); // 3 items visible
            else if (window.innerWidth >= 768) setItemWidth(50);   // 2 items visible
            else setItemWidth(100);                               // 1 item visible
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="font-bold text-center mb-12 text-4xl text-gray-900">
                    {t("testimonials.title")}
                </h2>

                <div className="mx-auto max-w-7xl relative">
                    {/* Testimonials container */}
                    <div className="pb-2 overflow-hidden">
                        <div
                            className="flex transition-transform ease-in-out duration-500"
                            style={{ transform: `translateX(-${currentIndex * itemWidth}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-full px-4 md:w-1/2 lg:w-1/3"
                                    style={{ minWidth: `${itemWidth}%` }}
                                >
                                    <div className="rounded-lg flex flex-col h-full bg-gray-50 shadow-md p-8">
                                        <p className="flex-grow leading-relaxed mb-6 text-gray-700 italic">
                                            "{testimonial.quote}"
                                        </p>
                                        <div className="border-t border-gray-200 pt-4">
                                            <p className="font-semibold text-lg text-gray-900">{testimonial.name}</p>
                                            <p className="text-sm text-gray-600">{testimonial.location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="bg-white rounded-full shadow-lg p-3 transition top-1/2 left-0 text-gray-800 z-10 -translate-y-1/2 -translate-x-4 absolute md:-translate-x-12 hover:cursor-pointer hover:bg-gray-100"
                        aria-label="Previous testimonial"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="bg-white rounded-full shadow-lg p-3 transition top-1/2 right-0 text-gray-800 z-10 -translate-y-1/2 translate-x-4 absolute md:translate-x-12 hover:cursor-pointer hover:bg-gray-100"
                        aria-label="Next testimonial"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Indicators */}
                    <div className="flex mt-8 gap-2 justify-center">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`hover:cursor-pointer w-3 h-3 rounded-full transition ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
