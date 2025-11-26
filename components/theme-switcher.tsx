"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@heroui/react";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        const id = requestAnimationFrame(() => setMounted(true))
        return () => cancelAnimationFrame(id)
    }, [])

    if (!mounted) return null

    return (
        <Switch
            defaultSelected
            color="secondary"
            size="lg"
            thumbIcon={({ className }) =>
                theme === "dark" ? <Moon className={className} /> : <Sun className={className} />
            }
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
    )
};