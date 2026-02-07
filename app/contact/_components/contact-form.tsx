"use client";

import {
    Button,
    Description,
    FieldError,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";
import { sendEmail } from "@/services/email-service";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useMountedTheme } from "@/hooks/use-mounted-theme";

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { currentTheme } = useMountedTheme();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        e.preventDefault();
        if (formRef.current) {
            const result = await sendEmail(
                "personal_gmail",
                "personal_contact_me",
                formRef.current,
                "3CFqOlgZaUb9HiZp8"
            );
            if (result) {
                formRef.current.reset();
                toast.success("Message sent successfully!", {
                    theme: currentTheme,
                });
            } else {
                toast.error("Failed to send message. Please try again later.", {
                    theme: currentTheme,
                });
            }
        }
        setIsLoading(false);
    };

    return (
        <form
            ref={formRef}
            className="flex w-96 flex-col gap-4"
            onSubmit={onSubmit}
        >
            {/* Full Name Field */}
            <TextField
                name="name"
                type="text"
                validate={(value) => {
                    if (value.trim().length === 0) {
                        return "Full name is required";
                    }
                    return null;
                }}
            >
                <Label>Full Name</Label>
                <Input placeholder="Please enter your full name..." />
                <FieldError />
            </TextField>

            {/* Email Field */}
            <TextField
                name="email"
                type="email"
                validate={(value) => {
                    if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                    ) {
                        return "Please enter a valid email address";
                    }
                    return null;
                }}
            >
                <Label>Email</Label>
                <Input placeholder="Please enter a valid email address..." />
                <Description>
                    Your email won&apos;t be saved or shared
                </Description>
                <FieldError />
            </TextField>

            {/* Title Field */}
            <TextField
                name="title"
                type="text"
                validate={(value) => {
                    if (value.trim().length === 0) {
                        return "Title is required";
                    }
                    return null;
                }}
            >
                <Label>Title</Label>
                <Input placeholder="Please enter the message title..." />
                <FieldError />
            </TextField>

            {/* Message Field */}
            <TextField
                name="message"
                validate={(value) => {
                    if (value.trim().length === 0) {
                        return "You gotta say something...";
                    }
                    return null;
                }}
            >
                <Label>Message</Label>
                <TextArea
                    placeholder="Insert well-structured message here (semicolons optional)."
                    rows={6}
                    style={{ resize: "vertical" }}
                />
                <FieldError />
            </TextField>

            <div className="flex gap-2">
                <Button type="submit" isDisabled={isLoading}>
                    {isLoading ? "Sending..." : "Submit"}
                </Button>
                <Button type="reset" variant="ghost" isDisabled={isLoading}>
                    Reset
                </Button>
            </div>
        </form>
    );
}
