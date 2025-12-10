"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Footer() {
    const { theme } = useTheme();
    const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
    const socials = [
        {
            name: "GitHub",
            href: "https://github.com/TomYalda",
            image: "github.png",
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/tom-yalda",
            image: "linkedin.png",
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/tom.yalda.2025/",
            image: "facebook.png",
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/tom.yalda2/",
            image: "instagram.png",
        },
    ];
    return (
        <footer className="w-full flex items-center justify-between p-4 sm:p-8">
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Tom Yalda. All rights
                reserved.
            </p>
            {/* TODO: MOBILE RESPONSIVENESS - Concatenate social buttons or make them disappear for mobile view */}
            <div className="flex items-center gap-4">
                {socials.map((social) => (
                    <Link key={social.name} href={social.href} className="mx-2">
                        <Button
                            variant="ghost"
                            size="md"
                            onMouseEnter={() => setHoveredSocial(social.name)}
                            onMouseLeave={() => setHoveredSocial(null)}
                        >
                            <Image
                                src={`/social-icons/${
                                    theme === "custom-dark"
                                        ? hoveredSocial === social.name
                                            ? "dark-hover/"
                                            : "dark/"
                                        : hoveredSocial === social.name
                                        ? "light-hover/"
                                        : "light/"
                                }${social.image}`}
                                alt={social.name}
                                width={24}
                                height={24}
                            />
                        </Button>
                    </Link>
                ))}
            </div>
        </footer>
    );
}
