"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../i18n/client";

function CalendarEmbed() {
  const [isClient, setIsClient] = useState(false); // Only render on client
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const { t } = useTranslation("common");

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
    <div className="container mx-auto my-4 px-4">
      <iframe
        src={`https://www.availabilitycalendar.com/embed/uPz5F5VSUXDIKVLeNqcb/${t("availabilitycalendar.lang")}-0-2-${numMonthsVisible}-1-0-0-0-0-0-0-0-1-0/?iframe=true&css=${cssUrl}`}
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
  const { t } = useTranslation("common");
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex flex-col mb-8 gap-4 md:items-center md:justify-between">
        <h2 className="font-semibold text-center text-3xl text-gray-800 md:text-left">
          {t("availabilityCalendar.title")}
        </h2>
        <CalendarEmbed />
      </div>
    </div>
  );
}
