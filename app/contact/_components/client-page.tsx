"use client";

import FlickerText from "@/components/flicker-text";
import ContactForm from "./contact-form";
import { Card, Separator } from "@heroui/react";
import SocialsColumn from "./socials-column";
import EmailColumn from "./email-column";

export default function ContactClientPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-6">
            <FlickerText text="CONTACT ME" />
            <Card className="flex max-w-4xl flex-col items-center justify-center gap-6 rounded-lg p-6 md:flex-row">
                <ContactForm />
                <Separator
                    orientation="horizontal"
                    className="w-full md:hidden"
                />
                <Separator
                    orientation="vertical"
                    className="hidden h-auto self-stretch md:block"
                />
                <div className="flex flex-col gap-6">
                    <EmailColumn />
                    <Separator
                        orientation="horizontal"
                        className="w-full md:hidden"
                    />
                    <SocialsColumn />
                </div>
            </Card>
        </div>
    );
}
