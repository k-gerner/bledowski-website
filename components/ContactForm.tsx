"use client";

import { useState } from 'react';
import { useTranslation } from "react-i18next";
import "../i18n/client";

function ContactForm() {
    const { t } = useTranslation("common");

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            alert(t("contactForm.success"));
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
        } else {
            alert(t("contactForm.error"));
        }
    };

    return (
        <div className="bg-white py-16">
            <div className="mx-auto max-w-2xl px-4">
                <h2 className="font-bold text-center mb-4 text-4xl text-gray-900">
                    {t("contactForm.title")}
                </h2>
                <p className="text-center mb-8 text-gray-600">
                    {t("contactForm.subtitle")}
                </p>

                <form onSubmit={handleSubmit} className="rounded-lg bg-gray-50 shadow-md p-8">
                    <div className="mb-6 grid gap-6 grid-cols-1 md:grid-cols-2">
                        <div>
                            <label htmlFor="firstName" className="font-medium text-sm mb-2 text-gray-700 block">
                                {t("contactForm.firstName")} *
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="border rounded-md outline-none border-gray-300 text-black w-full py-2 px-4 transition focus:border-transparent focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="font-medium text-sm mb-2 text-gray-700 block">
                                {t("contactForm.lastName")} *
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="border rounded-md outline-none border-gray-300 text-black w-full py-2 px-4 transition focus:border-transparent focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="mb-6 grid gap-6 grid-cols-1 md:grid-cols-2">
                        <div>
                            <label htmlFor="email" className="font-medium text-sm mb-2 text-gray-700 block">
                                {t("contactForm.email")} *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="border rounded-md outline-none border-gray-300 text-black w-full py-2 px-4 transition focus:border-transparent focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="font-medium text-sm mb-2 text-gray-700 block">
                                {t("contactForm.phone")}
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="border rounded-md outline-none border-gray-300 text-black w-full py-2 px-4 transition focus:border-transparent focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="font-medium text-sm mb-2 text-gray-700 block">
                            {t("contactForm.message")} *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="border rounded-md outline-none border-gray-300 text-black w-full py-2 px-4 transition resize-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="rounded-md font-semibold bg-blue-600 text-white w-full py-3 px-6 transition duration-200 hover:cursor-pointer hover:bg-blue-700"
                    >
                        {t("contactForm.submit")}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
