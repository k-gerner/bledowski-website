"use client";
import { useState, useEffect } from "react";

function CalendarEmbed() {
  const [isClient, setIsClient] = useState(false); // Only render on client
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    setIsClient(true); // Now we are in the browser

    // Detect screen size
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Do not render iframe on server
  if (!isClient) return null;

  // Mobile: 1 month, Tablet (md): 2 months, Desktop (lg+): 3 months
  const numMonthsVisible = isMobile ? 1 : isTablet ? 2 : 3;

  const cssUrl =
    process.env.NODE_ENV === "development"
      ? `http://localhost:3000/calendar-custom.css?t=${Date.now()}`
      : `https://bledowski-website.vercel.app/calendar-custom.css`;

  return (
    <div className="container mx-auto px-4 my-4">
      <iframe
        src={`https://www.availabilitycalendar.com/embed/uPz5F5VSUXDIKVLeNqcb/en-0-2-${numMonthsVisible}-1-0-0-0-0-0-0-0-1-0/?iframe=true&css=${cssUrl}`}
        style={{
          width: "100%",
          height: "420px",
          border: "none",
          borderRadius: "16px",
          overflow: "hidden",
        }}
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default function AvailabilityCalendar() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="flex flex-col md:items-center md:justify-between gap-4 mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 text-center md:text-left">
          Availability Calendar
        </h2>
        <CalendarEmbed />
      </div>
    </div>
  );
}
