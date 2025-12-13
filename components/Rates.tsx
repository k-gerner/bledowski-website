"use client";

import { useTranslation } from "react-i18next";
import "../i18n/client";

function Rates() {
    const { t } = useTranslation("common");

    return (
        <div>
            <h3 className="font-semibold text-center mb-4 text-3xl text-gray-900">
                {t("rates.title")}
            </h3>

            <div className="flex flex-col gap-6 justify-center md:flex-row lg:gap-16">
                {/* Spring */}
                <div className="rounded-lg bg-gray-100 shadow-md p-6">
                    <h4 className="font-semibold text-xl mb-2 text-gray-900">
                        {t("rates.spring.title")}
                    </h4>
                    <ul className="leading-relaxed text-gray-700">
                        <li className="list-none">{t("rates.labels.weekend")}: $210</li>
                        <li className="list-none">{t("rates.labels.weeknight")}: $165</li>
                        <li className="list-none">{t("rates.labels.week")}: $900</li>
                        <li className="list-none">{t("rates.labels.month")}: $2,580</li>
                    </ul>
                </div>

                {/* Summer */}
                <div className="rounded-lg bg-gray-100 shadow-md p-6">
                    <h4 className="font-semibold text-xl mb-2 text-gray-900">
                        {t("rates.summer.title")}
                    </h4>
                    <ul className="leading-relaxed text-gray-700">
                        <li className="list-none">{t("rates.labels.weekend")}: $265</li>
                        <li className="list-none">{t("rates.labels.weeknight")}: $250</li>
                        <li className="list-none">{t("rates.labels.week")}: $1,265</li>
                        <li className="list-none">{t("rates.labels.month")}: $3,565</li>
                    </ul>
                </div>

                {/* Autumn */}
                <div className="rounded-lg bg-gray-100 shadow-md p-6">
                    <h4 className="font-semibold text-xl mb-2 text-gray-900">
                        {t("rates.autumn.title")}
                    </h4>
                    <ul className="leading-relaxed text-gray-700">
                        <li className="list-none">{t("rates.labels.weekend")}: $225</li>
                        <li className="list-none">{t("rates.labels.weeknight")}: $185</li>
                        <li className="list-none">{t("rates.labels.week")}: $980</li>
                        <li className="list-none">{t("rates.labels.month")}: $2,800</li>
                    </ul>
                </div>

                {/* Ski */}
                <div className="rounded-lg bg-gray-100 shadow-md p-6">
                    <h4 className="font-semibold text-xl mb-2 text-gray-900">
                        {t("rates.ski.title")}
                    </h4>
                    <ul className="leading-relaxed text-gray-700">
                        <li className="list-none">
                            {t("rates.ski.duration")}: $16,000
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Rates;
