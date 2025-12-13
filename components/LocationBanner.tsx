"use client";

import { useTranslation } from "react-i18next";
import "../i18n/client"; // make sure your i18n client is imported

function LocationBanner() {
    const { t } = useTranslation("common");

    return (
        <section className="w-full py-8">
            <h2 className="text-black text-center mb-4 text-3xl">
                {t("locationbanner.title")}
            </h2>
            <p className="text-black text-center">
                {t("locationbanner.subtitle")}
            </p>
        </section>
    );
}

export default LocationBanner;
