"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import "../i18n/client";

// Import Leaflet CSS
import "leaflet/dist/leaflet.css";

// Dynamically import the entire map to avoid SSR issues
const Map = dynamic(() => import("./Map"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[400px] rounded-lg bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Loading map...</p>
        </div>
    )
});

export default function LocationMap() {
    const { t } = useTranslation("common");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6">{t("location.title")}</h2>
            <div className="grid md:grid-cols-2 gap-6 items-start">
                {/* Text content on the left */}
                <div className="text-gray-700 space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{t("location.howToGetThere.title")}</h3>
                        <p className="leading-relaxed">
                            {t("location.howToGetThere.description")}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{t("location.attractions.title")}</h3>
                        <ul className="space-y-2 leading-relaxed">
                            <li>
                                <span className="font-medium">{t("location.attractions.oldVillage.name")}</span>: {t("location.attractions.oldVillage.distance")}
                            </li>
                            <li>
                                <span className="font-medium">{t("location.attractions.resort.name")}</span>: {t("location.attractions.resort.distance")}
                            </li>
                            <li>
                                <span className="font-medium">{t("location.attractions.downtown.name")}</span>: {t("location.attractions.downtown.distance")}
                            </li>
                            <li>
                                <span className="font-medium">{t("location.attractions.nationalPark.name")}</span>: {t("location.attractions.nationalPark.distance")}
                            </li>
                            <li>
                                <span className="font-medium">{t("location.attractions.domainStBernard.name")}</span>: {t("location.attractions.domainStBernard.distance")}
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Map on the right */}
                <div>
                    {mounted && <Map key={Date.now()} />}
                </div>
            </div>
        </div>
    );
}
