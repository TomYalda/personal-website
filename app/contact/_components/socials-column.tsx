"use client";

import { Card, Description, Label, ListBox } from "@heroui/react";
import Image from "next/image";
import { SOCIALS } from "@/constants/socials";
import { useMountedTheme } from "@/hooks/use-mounted-theme";

export default function SocialsColumn() {
    const { currentTheme } = useMountedTheme();

    return (
        <Card className="items-center justify-center gap-4 rounded-lg border-none p-6 shadow-none">
            <h2 className="mb-4 w-full text-center text-2xl">
                Or catch me online!
            </h2>
            <div className="w-full md:block">
                <ListBox
                    aria-label="Social links"
                    className="w-full socials-listbox"
                    selectionMode="none"
                >
                    {SOCIALS.map((social) => (
                        <ListBox.Item
                            key={social.name}
                            id={social.name}
                            textValue={social.name}
                            href={social.href}
                            className="px-4 py-3"
                        >
                            <div className="flex items-center gap-4">
                                <Image
                                    src={`/social-icons/${
                                        currentTheme === "custom-dark"
                                            ? "dark/"
                                            : "light/"
                                    }${social.image}`}
                                    alt={social.name}
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                                <div className="flex flex-col">
                                    <Label>{social.name}</Label>
                                    <Description>
                                        {social.href
                                            .replace(/^https?:\/\//, "")
                                            .replace(/^www\./, "")}
                                    </Description>
                                </div>
                            </div>
                        </ListBox.Item>
                    ))}
                </ListBox>
            </div>
        </Card>
    );
}
