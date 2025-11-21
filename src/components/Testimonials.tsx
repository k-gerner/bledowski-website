import { useState, useEffect } from 'react'

interface Testimonial {
    quote: string
    name: string
    location: string
}

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemWidth, setItemWidth] = useState(100) // percentage width of each item

    // Update item width based on screen size
    useEffect(() => {
        const updateWidth = () => {
            if (window.innerWidth >= 1024) {
                setItemWidth(100 / 3) // lg: 3 items visible, each is 33.33%
            } else if (window.innerWidth >= 768) {
                setItemWidth(50) // md: 2 items visible, each is 50%
            } else {
                setItemWidth(100) // sm: 1 item visible, each is 100%
            }
        }

        updateWidth()
        window.addEventListener('resize', updateWidth)
        return () => window.removeEventListener('resize', updateWidth)
    }, [])

    // Dummy testimonials - replace with real data
    const testimonials: Testimonial[] = [
        {
            quote: "Chalet la Falaise exceeded all our expectations! The location is perfect, close to everything yet peaceful. Our family had an amazing winter vacation here.",
            name: "Sarah Johnson",
            location: "Boston, MA"
        },
        {
            quote: "Beautiful property with stunning views. The mezzanine was perfect for our kids, and the kitchen had everything we needed. We'll definitely be back!",
            name: "Marc Dubois",
            location: "Montreal, QC"
        },
        {
            quote: "A hidden gem in Mont-Tremblant! The walk to the Old Village was lovely, and having access to Lake Moore was a bonus. Highly recommend for couples or families.",
            name: "Emily Chen",
            location: "Toronto, ON"
        },
        {
            quote: "The chalet was spotless and well-maintained. Perfect for our ski trip - only 5 minutes to the slopes! The terrace was great for our morning coffee.",
            name: "David Martinez",
            location: "New York, NY"
        },
        {
            quote: "We loved the authentic French-Canadian charm. The cathedral ceiling is gorgeous, and the beds were so comfortable. Already planning our next stay!",
            name: "Lisa Anderson",
            location: "Chicago, IL"
        },
        {
            quote: "Great value for money. The outdoor shed was perfect for storing our ski equipment, and the location can't be beat. The owners were very responsive.",
            name: "Pierre Lefebvre",
            location: "Quebec City, QC"
        }
    ]

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                    What Our Guests Say
                </h2>

                <div className="relative max-w-7xl mx-auto">
                    {/* Testimonials Container */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * itemWidth}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                                >
                                    <div className="bg-gray-50 rounded-lg p-8 shadow-md h-full flex flex-col">
                                        {/* Quote Icon */}
                                        <svg
                                            className="w-10 h-10 text-blue-500 mb-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>

                                        {/* Quote */}
                                        <p className="text-gray-700 leading-relaxed mb-6 flex-grow italic">
                                            "{testimonial.quote}"
                                        </p>

                                        {/* Name and Location */}
                                        <div className="border-t border-gray-200 pt-4">
                                            <p className="font-semibold text-gray-900 text-lg">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                {testimonial.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition z-10 hover:cursor-pointer"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition z-10 hover:cursor-pointer"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
