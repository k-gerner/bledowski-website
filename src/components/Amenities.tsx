import { LuBed, LuBath } from "react-icons/lu";
import { RiSofaLine } from "react-icons/ri";
import { PiTowel, PiHairDryerBold } from "react-icons/pi";
import { TbToolsKitchen3, TbCampfire, TbIroningSteam } from "react-icons/tb";
import { FaGlassMartiniAlt, FaChair, FaDesktop, FaRegLightbulb, FaRegSnowflake, FaTv, FaPhone, FaWifi, FaPrint } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";
import { CiSun } from "react-icons/ci";
import { MdOutlineOutdoorGrill, MdDeck, MdDeviceThermostat } from "react-icons/md";
import { FaWarehouse, FaCarSide, FaHouseChimney, FaWind, FaShower, FaChild } from "react-icons/fa6";
import { BsOutlet } from "react-icons/bs";
import { BiSolidWasher } from "react-icons/bi";
import { RxCrossCircled } from "react-icons/rx";





import React from "react";

interface Amenity {
    icon: React.ReactNode;
    description: string;
    textColor?: string;
}

interface AmenityCategory {
    title: string;
    items: (Amenity | string)[];
}

function Amenities() {
    const amenitiesData: AmenityCategory[] = [
        {
            title: "The Space",
            items: [
                { icon: <LuBed />, description: "Master bedroom, Queen" },
                { icon: <LuBed />, description: "Guest bedroom, Queen" },
                { icon: <LuBed />, description: "Children bedroom, 2 singles" },
                { icon: <RiSofaLine />, description: "Living room, convertible sofa" },
                { icon: <RiSofaLine />, description: "Loft, convertible sofa" },
                { icon: <PiTowel />, description: "Linens, covers, blankets, towels" },
                { icon: <FaGlassMartiniAlt />, description: "Fully equipped kitchen" },
                { icon: <TbToolsKitchen3 />, description: "Dinner table for 8" },
                { icon: <SlPeople />, description: "Breakfast bar for 2" },
                { icon: <LuBath />, description: "Bath downstairs, shower" },
                { icon: <LuBath />, description: "Bath upstairs, shower tub" }
            ]
        },
        {
            title: "Outside",
            items: [
                { icon: <CiSun />, description: "Terrace patio" },
                { icon: <FaChair />, description: "Patio furniture (summer)" },
                { icon: <MdOutlineOutdoorGrill />, description: "Grill set (summer)" },
                { icon: <MdDeck />, description: "Wrap-around porch" },
                { icon: <FaWarehouse />, description: "Attached shed" },
                { icon: <FaCarSide />, description: "2 reserved parking spaces" },
                { icon: <FaCarSide />, description: "Street parking (summer)" },
                { icon: <BsOutlet />, description: "Outlets for block heaters (120V)" },
                { icon: <FaRegLightbulb />, description: "Outdoor lighting timer" },
                { icon: <FaRegSnowflake />, description: "Snow removal service" }
            ]
        },
        {
            title: "Inside",
            items: [
                { icon: <TbCampfire />, description: "Fireplace" },
                { icon: <FaHouseChimney />, description: "Chimney" },
                { icon: <FaHouseChimney />, description: "Cathedral ceiling" },
                { icon: <MdDeviceThermostat />, description: "Individual thermostats" },
                { icon: <MdDeviceThermostat />, description: "Electric heating" },
                { icon: <FaWind />, description: "Dehumidifier and air exchanger" },
                { icon: <FaWind />, description: "Air conditioning" },
                { icon: <BiSolidWasher />, description: "Washer, dryer" },
                { icon: <TbIroningSteam />, description: "Ironing board" },
                { icon: <PiHairDryerBold />, description: "Hair dryers" },
                { icon: <FaShower />, description: "Shower gel, soap, shampoo" }
            ]
        },
        {
            title: "Bonus",
            items: [
                { icon: <FaTv />, description: "Cable TV" },
                { icon: <FaTv />, description: "HDTV, Blu-ray, CD" },
                { icon: <FaDesktop />, description: "Home office desk" },
                { icon: <BsOutlet />, description: "Phone charging station" },
                { icon: <FaPhone />, description: "Phone, unlimited calling US/Canada" },
                { icon: <FaWifi />, description: "Internet Wi-Fi" },
                { icon: <FaPrint />, description: "Printer/copier/fax/scanner" },
                { icon: <FaChild />, description: "Kids’ mattress, high chair" },
                { icon: <RxCrossCircled />, description: "No pets", textColor: "text-red-500" },
                { icon: <RxCrossCircled />, description: "No smoking", textColor: "text-red-500" }
            ]
        }
    ]

    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                    Amenities
                </h2>

                <div className="flex flex-col lg:flex-row gap-8">
                    {amenitiesData.map((category, index) => (
                        <div key={index} className="flex-1 bg-gray-50 rounded-lg p-6 shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                                {category.title}
                            </h3>
                            <ul className="space-y-2">
                                {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start text-gray-700">
                                        {typeof item === 'string' ? (
                                            <span className="ml-6">• {item}</span>
                                        ) : (
                                            <>
                                                <span className={`${item.textColor ?? 'text-blue-500'} text-xl mt-1`}>
                                                    {item.icon}
                                                </span>
                                                <span className="ml-4">{item.description}</span>
                                            </>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Amenities
