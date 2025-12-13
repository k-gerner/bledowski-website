"use client";

import { useTranslation } from "react-i18next";
import "../i18n/client"; // make sure your i18n client is imported
function PropertyDetails() {
    const { t } = useTranslation("common");
    return (
        <div>
            <h3 className="font-semibold mb-4 text-2xl text-gray-900">{t("propertydetails.title")}</h3>
            <p className="leading-relaxed text-gray-700">
                {t("propertydetails.subtitle")}
            </p>
        </div>
    )
}

export default PropertyDetails
