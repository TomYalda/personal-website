"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { socialMediaLinks } from "@/lib/routes";
import { useMountedTheme } from "@/hooks/use-mounted-theme";

export default function Footer() {
    const { currentTheme } = useMountedTheme();
    const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
    const socials = [
        {
            name: "GitHub",
            href: socialMediaLinks.GITHUB,
            image: "github.png",
        },
        {
            name: "LinkedIn",
            href: socialMediaLinks.LINKEDIN,
            image: "linkedin.png",
        },
        {
            name: "Facebook",
            href: socialMediaLinks.FACEBOOK,
            image: "facebook.png",
        },
        {
            name: "Instagram",
            href: socialMediaLinks.INSTAGRAM,
            image: "instagram.png",
        },
    ];

    return (
        <footer className="w-full flex items-center justify-center md:justify-between p-4">
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Tom Yalda. All rights
                reserved.
            </p>
            <div className="hidden items-center gap-4 md:flex">
                {socials.map((social) => (
                    <Link key={social.name} href={social.href}>
                        <Button
                            variant="ghost"
                            size="md"
                            onMouseEnter={() => setHoveredSocial(social.name)}
                            onMouseLeave={() => setHoveredSocial(null)}
                            className="p-4"
                        >
                            <Image
                                src={`/social-icons/${
                                    currentTheme === "custom-dark"
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
                                className="object-contain"
                            />
                        </Button>
                    </Link>
                ))}
            </div>
        </footer>
    );
}
