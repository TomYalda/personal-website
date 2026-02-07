"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SOCIALS } from "@/constants/socials";
import { useMountedTheme } from "@/hooks/use-mounted-theme";

export default function Footer() {
    const { currentTheme } = useMountedTheme();
    const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

    return (
        <footer className="w-full flex items-center justify-center md:justify-between p-4">
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Tom Yalda. All rights
                reserved.
            </p>
            <div className="hidden items-center gap-4 md:flex">
                {SOCIALS.map((social) => (
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
