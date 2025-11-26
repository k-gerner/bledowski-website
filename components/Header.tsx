import Image from "next/image";
import { Advent_Pro } from "next/font/google";
const adventPro = Advent_Pro({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
});

function Header() {
    return (
        <header className="bg-gradient-to-r from-blue-500 to-blue-100 text-white shadow-lg">
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
                        <h1 className={`text-2xl md:text-5xl font-bold mb-1 md:mb-2 ${adventPro.className}`}>
                        Chalet la Falaise
                        </h1>
                        <p className={`text-sm md:text-xl text-blue-100 ${adventPro.className}`}>
                        French culture in the heart of Québec
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
