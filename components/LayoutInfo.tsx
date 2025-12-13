"use client";

import { useTranslation } from "react-i18next";
import "../i18n/client";

function LayoutInfo() {
    const { t } = useTranslation("common");

    return (
        <div>
            <h3 className="font-semibold mb-4 text-2xl text-gray-900">
                {t("layoutinfo.title")}
            </h3>

            <ul className="space-y-3 text-gray-700">
                {/* Lower level */}
                <li className="flex items-start">
                    <svg
                        className="flex-shrink-0 h-6 mt-0.5 mr-2 text-blue-500 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                    </svg>
                    <span>
                        <strong>{t("layoutinfo.items.lower.label")}:</strong>{" "}
                        {t("layoutinfo.items.lower.description")}
                    </span>
                </li>

                {/* Upper level */}
                <li className="flex items-start">
                    <svg
                        className="flex-shrink-0 h-6 mt-0.5 mr-2 text-blue-500 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                    </svg>
                    <span>
                        <strong>{t("layoutinfo.items.upper.label")}:</strong>{" "}
                        {t("layoutinfo.items.upper.description")}
                    </span>
                </li>

                {/* Cathedral ceiling */}
                <li className="flex items-start">
                    <svg
                        className="flex-shrink-0 h-6 mt-0.5 mr-2 text-blue-500 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span>{t("layoutinfo.items.ceiling")}</span>
                </li>
            </ul>
        </div>
    );
}

export default LayoutInfo;
