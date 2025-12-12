"use client";

import { useTranslation } from "react-i18next";
import "../i18n/client"; // make sure your i18n client is imported

function PropertyDescription() {
    const { t } = useTranslation("common");
    return (
        <div className="space-y-4 text-sm">
            <h2 className="font-bold text-3xl text-gray-900">
                {t("propertydescription.title")}
            </h2>
            <p className="leading-relaxed text-gray-700">
                {t("propertydescription.p1")}
            </p>
            <p className="leading-relaxed text-gray-700">
                {t("propertydescription.p2")}
            </p>
            <p className="leading-relaxed text-gray-700">
                {t("propertydescription.p3")}
            </p>
        </div>
    )
}

export default PropertyDescription
