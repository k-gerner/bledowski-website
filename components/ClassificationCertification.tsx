"use client";

import { useTranslation } from "react-i18next";
import "../i18n/client";

import { FaAirbnb, FaAward } from "react-icons/fa";

export default function ClassificationCertification() {
    const { t } = useTranslation("common");

    return (
        <section className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="grid gap-8 md:gap-12 md:grid-cols-2">
                    {/* Superhost */}
                    <div className="flex flex-col text-center items-center md:text-left md:items-start">
                        <div className="rounded-full bg-red-100 mb-4 p-4">
                            <FaAirbnb className="h-8 text-red-600 w-8" />
                        </div>
                        <h3 className="font-bold mb-3 text-2xl text-gray-900">
                            {t("classification.superhost.title")}
                        </h3>
                        <p className="leading-relaxed text-gray-600">
                            {t("classification.superhost.description")}
                        </p>
                    </div>

                    {/* Certification */}
                    <div className="flex flex-col text-center items-center md:text-left md:items-start">
                        <div className="rounded-full bg-green-100 mb-4 p-4">
                            <FaAward className="h-8 text-green-600 w-8" />
                        </div>
                        <h3 className="font-bold mb-3 text-2xl text-gray-900">
                            {t("classification.certificate.title")}
                        </h3>
                        <p className="leading-relaxed text-gray-600">
                            {t("classification.certificate.description")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
