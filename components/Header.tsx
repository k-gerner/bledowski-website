"use client";
import Image from "next/image";
import { Advent_Pro } from "next/font/google";
const adventPro = Advent_Pro({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
});

function Header() {
    return (
        <header className="bg-gradient-to-r from-blue-500 to-blue-200 text-white shadow-lg">
            <div className="container mx-auto px-4 py-2">
                <div className="flex items-center gap-3 md:gap-6">
                    {/* Logo */}
                    <Image
                        width={160}      // md:h-40 = 160px
                        height={160}     // md:w-40 = 160px
                        src="/chalet_la_falaise_logo.png"
                        alt="Chalet la Falaise Logo"
                        className="h-20 w-20 md:h-40 md:w-40 object-contain"
                    />
                    {/* Title and Subtitle */}
                    <div>
                        <h1
                            className={`text-2xl md:text-5xl font-bold mb-1 md:mb-2 ${adventPro.className}`}
                            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                            Chalet la Falaise
                        </h1>
                        <p className={`text-sm md:text-xl text-black-500 ${adventPro.className}`}
                            style={{ textShadow: "2px 2px 3px rgba(0,0,0,0.5)" }}>
                        French culture in the heart of Québec
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-3">
                    {[
                        { full: "English 🇬🇧", short: "🇬🇧" },
                        { full: "Français 🇫🇷", short: "🇫🇷" },
                        { full: "Polski 🇵🇱", short: "🇵🇱" },
                        { full: "Deutsch 🇩🇪", short: "🇩🇪" },
                    ].map((lang) => (
                        <button
                        key={lang.full}
                        onClick={() => console.log("switch", lang.short)}
                        className="bg-white text-blue-700 px-3 py-1 rounded shadow hover:bg-blue-100 hover:scale-105 transition-transform cursor-pointer"
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
