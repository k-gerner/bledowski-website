"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import "../i18n/client";

function AboutOwners() {
    const { t } = useTranslation("common");
    const paragraphs = t("aboutOwners.paragraphs", { returnObjects: true }) as string[];

    return (
        <div className="bg-white py-16">
            <div className="container mx-auto max-w-2xl px-4">
                <h2 className="font-bold text-center mb-4 text-4xl text-gray-900">
                    {t("aboutOwners.title")}
                </h2>

                <div className="rounded-lg bg-gray-50 shadow-md p-8">
                    {/* Owner Image */}
                    <div className="mb-6">
                        <Image
                            width={1920} // md:h-40 = 160px
                            height={1920} // md:w-40 = 160px
                            src="/about_the_owners.jpg"
                            alt={t("aboutOwners.imageAlt")}
                            className="rounded-lg object-cover h-64 w-full"
                        />
                    </div>

                    {/* Blurb */}
                    <div className="space-y-4 text-gray-700">
                        {paragraphs.map((p, idx) => (
                            <p key={idx}>{p}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutOwners;
