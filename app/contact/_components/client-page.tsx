"use client";

import FlickerText from "@/components/flicker-text";
import ContactForm from "./contact-form";
import { Card } from "@heroui/react";

export default function ContactClientPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <FlickerText text="CONTACT ME" />
            <Card>
                <ContactForm />
            </Card>
        </div>
    );
}
