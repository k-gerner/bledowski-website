"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { Advent_Pro } from "next/font/google";
import "../i18n/client";
const adventPro = Advent_Pro({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

function Header() {
    const { t, i18n } = useTranslation("common");
    const changeLanguage = (lng: string | undefined) => {
        i18n.changeLanguage(lng);
    };
    return (
        <header className="bg-gradient-to-r from-blue-500 to-blue-200 shadow-lg text-white">
            <div className="container mx-auto py-2 px-4">
                <div className="flex gap-3 items-center md:gap-6">
                    {/* Logo */}
                    <Image
                        width={160}      // md:h-40 = 160px
                        height={160}     // md:w-40 = 160px
                        src="/chalet_la_falaise_logo.png"
                        alt="Chalet la Falaise Logo"
                        className="object-contain h-20 w-20 md:h-40 md:w-40"
                    />
                    {/* Title and Subtitle */}
                    <div>
                        <h1
                            className={`text-2xl md:text-5xl font-bold mb-1 md:mb-2 ${adventPro.className}`}
                            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                            {t("header.title")}
                        </h1>
                        <p className={`text-sm md:text-xl text-black-500 ${adventPro.className}`}
                            style={{ textShadow: "2px 2px 3px rgba(0,0,0,0.5)" }}>
                            {t("header.subtitle")}
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-3">
                    {[
                        { full: "English 🇬🇧", short: "🇬🇧", lng: "en" },
                        { full: "Français 🇫🇷", short: "🇫🇷", lng: "fr" },
                        { full: "Polski 🇵🇱", short: "🇵🇱", lng: "pl" },
                        { full: "Deutsch 🇩🇪", short: "🇩🇪", lng: "de" },
                    ].map((lang) => (
                        <button
                            key={lang.full}
                            onClick={() => changeLanguage(lang.lng)}
                            className="bg-white rounded cursor-pointer shadow py-1 px-3 transition-transform text-blue-700 hover:bg-blue-100 hover:scale-105"
                        >
                            <span className="hidden sm:inline">{lang.full}</span>
                            <span className="inline sm:hidden">{lang.short}</span>
                        </button>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header
