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
import validator from "validator";
import Mailcheck from "mailcheck";

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { currentTheme } = useMountedTheme();

    const validateEmail = (email: string) => {
        if (email.trim().length === 0) {
            return "I gotta know where you're coming from..";
        }
        if (!validator.isEmail(email)) {
            return "That email doesn't seem valid...";
        }
        const suggestion = Mailcheck.run({ email });
        if (suggestion) {
            return `Did you mean ${suggestion.full}?`;
        }
        return null;
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        e.preventDefault();
        if (formRef.current) {
            try {
                const result = await sendEmail(
                    "personal_gmail",
                    "personal_contact_me",
                    formRef.current,
                    "3CFqOlgZaUb9HiZp8",
                );
                if (result) {
                    formRef.current.reset();
                    toast.success(
                        "Message successfully sent from " +
                            formRef.current.email.value +
                            "! Check inbox for autoresponder email.",
                        {
                            theme:
                                currentTheme === "custom-dark"
                                    ? "dark"
                                    : "light",
                        },
                    );
                } else {
                    toast.error(
                        "Failed to send message. Please try again later.",
                        {
                            theme:
                                currentTheme === "custom-dark"
                                    ? "dark"
                                    : "light",
                        },
                    );
                }
            } catch (error) {
                toast.error(`${error}`, {
                    theme: currentTheme === "custom-dark" ? "dark" : "light",
                });
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="flex w-full flex-col items-center justify-center p-6 gap-4">
            <h2 className="mb-4 w-full text-center text-2xl">
                Use the contact form,
            </h2>
            <form
                ref={formRef}
                className="flex w-full flex-col gap-4"
                onSubmit={onSubmit}
            >
                {/* Full Name Field */}
                <TextField
                    name="name"
                    type="text"
                    validate={(value) => {
                        if (value.trim().length === 0) {
                            return "I gotta know who you are...";
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
                    validate={(value) => validateEmail(value)}
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
                            return "You gotta give your message a title...";
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
        </div>
    );
}
