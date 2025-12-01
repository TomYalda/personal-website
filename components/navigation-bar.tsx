"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import { useTheme } from "next-themes";
import ThemeSwitcher from "./theme-switcher";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function NavigationBar() {
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const pathname = usePathname();

    useEffect(() => {
        const id = requestAnimationFrame(() => setMounted(true))
        return () => cancelAnimationFrame(id)
    }, [])

    const currentTheme = mounted ? (resolvedTheme || theme) : 'light'

    const navigation = [
        { title: "Home", link: '/' },
        { title: "About Me", link: '/about' },
        { title: "Portfolio", link: '/portfolio' },
        { title: "Progress", link: '/progress' },
        { title: "Contact Me", link: '/contact' },
    ]

    return (
        <nav className="w-full flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
                <Link href="/">
                    <Image
                        src={currentTheme === "custom-dark" ? "/logos/logo-and-name-dark-mode.png" : "/logos/logo-and-name-light-mode.png"}
                        alt="Logo"
                        width={150}
                        height={50}
                        priority
                    />
                </Link>

            </div>
            <div className="hidden sm:flex items-center gap-4 justify-end">
                {navigation.map((item) => (
                    <Link key={item.title} href={item.link}>
                        <Button
                            variant={pathname === item.link ? "primary" : "ghost"}
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