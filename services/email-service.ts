"use client";

import emailjs from "@emailjs/browser";

export const sendEmail = async (
    serviceId: string,
    templateId: string,
    formRef: HTMLFormElement,
    publicKey: string
) => {
    try {
        const result = await emailjs.sendForm(serviceId, templateId, formRef, {
            publicKey,
        });

        if (result.status !== 200) {
            throw new Error(result.text ?? "Email service returned an error.");
        }
        console.log("Email successfully sent!", result.text);
    } catch (error) {
        const errorTyped = error as { text?: string; message?: string };
        const message =
            errorTyped.text ?? errorTyped.message ?? "Unknown error";
        console.error("Error sending email:", message);

        return false;
    }

    return true;
};
