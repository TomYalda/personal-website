"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import ThemeSwitcher from "./theme-switcher";
import { usePathname } from "next/navigation";
import { pageRoutes } from "@/lib/routes";
import Link from "next/link";
import { useMountedTheme } from "@/hooks/use-mounted-theme";

export default function NavigationBar() {
    const { currentTheme } = useMountedTheme();
    const pathname = usePathname();

    const navigation = [
        { title: "Home", link: pageRoutes.HOME },
        { title: "About Me", link: pageRoutes.ABOUT_ME },
        { title: "Portfolio", link: pageRoutes.PORTFOLIO },
        { title: "Progress", link: pageRoutes.PROGRESS },
        { title: "Contact Me", link: pageRoutes.CONTACT_ME },
    ];

    return (
        <nav className="w-full flex items-center justify-between p-4 border-b-2">
            <div className="flex items-center shrink-0">
                <Link href={pageRoutes.HOME}>
                    <Image
                        src={
                            currentTheme === "custom-dark"
                                ? "/logos/logo-and-name-dark-mode.png"
                                : "/logos/logo-and-name-light-mode.png"
                        }
                        alt="Logo"
                        width={150}
                        height={50}
                        priority
                    />
                </Link>
            </div>
            {/* TODO: MOBILE RESPONSIVENESS - Add sidebar and burger menu when HeroUI integrates it into their component library */}
            <div className="hidden sm:flex items-center gap-4 justify-end">
                {navigation.map((item) => (
                    <Link key={item.title} href={item.link}>
                        <Button
                            variant={
                                pathname === item.link ? "primary" : "ghost"
                            }
                            size="md"
                        >
                            {item.title}
                        </Button>
                    </Link>
                ))}
                <ThemeSwitcher />
            </div>
        </nav>
    );
}
