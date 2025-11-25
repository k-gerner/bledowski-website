import { useState, useEffect } from 'react'

function CalendarEmbed() {
    // Use local CSS in development, production CSS when deployed
    const cssUrl = import.meta.env.DEV
        ? `http://localhost:5173/calendar-custom.css?t=${Date.now()}`
        : 'https://bledowski-website.vercel.app/calendar-custom.css';

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const numMonthsVisible = isMobile ? 1 : 3;

    return (
        <div className="container mx-auto px-4 my-12">
            <iframe
                src={`https://www.availabilitycalendar.com/embed/uPz5F5VSUXDIKVLeNqcb/en-0-2-${numMonthsVisible}-1-0-0-0-0-0-0-0-1-0/?iframe=true&css=${cssUrl}`}
                style={{
                    width: "100%",
                    height: "360px",
                    border: "none",
                    borderRadius: "16px",
                    overflow: "hidden",
                }}
                allowTransparency={true}
                loading="lazy"
            ></iframe>
        </div>
    );
}

function AvailabilityCalendar() {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:items-center md:justify-between gap-4 mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 text-center md:text-left">Availability Calendar</h2>
                <CalendarEmbed />
            </div>
        </div>
    )
}

export default AvailabilityCalendar