"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n/client";

import { LuBed, LuBath } from "react-icons/lu";
import { RiSofaLine } from "react-icons/ri";
import { PiTowel, PiHairDryerBold } from "react-icons/pi";
import { TbToolsKitchen3, TbCampfire, TbIroningSteam } from "react-icons/tb";
import {
    FaGlassMartiniAlt,
    FaChair,
    FaDesktop,
    FaRegLightbulb,
    FaRegSnowflake,
    FaTv,
    FaPhone,
    FaWifi,
    FaPrint,
} from "react-icons/fa";
import { SlPeople } from "react-icons/sl";
import { CiSun } from "react-icons/ci";
import {
    MdOutlineOutdoorGrill,
    MdDeck,
    MdDeviceThermostat,
} from "react-icons/md";
import {
    FaWarehouse,
    FaCarSide,
    FaHouseChimney,
    FaWind,
    FaShower,
    FaChild,
} from "react-icons/fa6";
import { BsOutlet } from "react-icons/bs";
import { BiSolidWasher } from "react-icons/bi";
import { RxCrossCircled } from "react-icons/rx";

function Amenities() {
    const { t } = useTranslation("common");

    const amenitiesConfig = [
        {
            key: "theSpace",
            items: [
                { icon: <LuBed /> },
                { icon: <LuBed /> },
                { icon: <LuBed /> },
                { icon: <RiSofaLine /> },
                { icon: <RiSofaLine /> },
                { icon: <PiTowel /> },
                { icon: <FaGlassMartiniAlt /> },
                { icon: <TbToolsKitchen3 /> },
                { icon: <SlPeople /> },
                { icon: <LuBath /> },
                { icon: <LuBath /> },
            ],
        },
        {
            key: "outside",
            items: [
                { icon: <CiSun /> },
                { icon: <FaChair /> },
                { icon: <MdOutlineOutdoorGrill /> },
                { icon: <MdDeck /> },
                { icon: <FaWarehouse /> },
                { icon: <FaCarSide /> },
                { icon: <FaCarSide /> },
                { icon: <BsOutlet /> },
                { icon: <FaRegLightbulb /> },
                { icon: <FaRegSnowflake /> },
            ],
        },
        {
            key: "inside",
            items: [
                { icon: <TbCampfire /> },
                { icon: <FaHouseChimney /> },
                { icon: <FaHouseChimney /> },
                { icon: <MdDeviceThermostat /> },
                { icon: <MdDeviceThermostat /> },
                { icon: <FaWind /> },
                { icon: <FaWind /> },
                { icon: <BiSolidWasher /> },
                { icon: <TbIroningSteam /> },
                { icon: <PiHairDryerBold /> },
                { icon: <FaShower /> },
            ],
        },
        {
            key: "bonus",
            items: [
                { icon: <FaTv /> },
                { icon: <FaTv /> },
                { icon: <FaDesktop /> },
                { icon: <BsOutlet /> },
                { icon: <FaPhone /> },
                { icon: <FaWifi /> },
                { icon: <FaPrint /> },
                { icon: <FaChild /> },
                { icon: <RxCrossCircled />, textColor: "text-red-500" },
                { icon: <RxCrossCircled />, textColor: "text-red-500" },
            ],
        },
    ];

    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="font-bold text-center mb-12 text-4xl text-gray-900">
                    {t("amenities.title")}
                </h2>

                <div className="flex flex-col gap-8 lg:flex-row">
                    {amenitiesConfig.map((category) => (
                        <div
                            key={category.key}
                            className="rounded-lg bg-gray-50 flex-1 shadow-md p-6"
                        >
                            <h3 className="font-semibold border-b-2 border-blue-500 mb-4 pb-2 text-2xl text-gray-900">
                                {t(`amenities.categories.${category.key}.title`)}
                            </h3>

                            <ul className="space-y-2">
                                {category.items.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex text-gray-700 items-start"
                                    >
                                        <span
                                            className={`${item.textColor ?? "text-blue-500"
                                                } text-xl mt-1`}
                                        >
                                            {item.icon}
                                        </span>
                                        <span className="ml-4">
                                            {t(
                                                `amenities.categories.${category.key}.items.${index}`
                                            )}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Amenities;
