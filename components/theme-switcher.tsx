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
        <Switch isSelected={theme === "custom-dark"}
            onChange={(isSelected) => setTheme(isSelected ? "custom-dark" : "custom-light")}
            className="scale-150 ml-4"
            size="lg">
            {({ isSelected }) => (
                <>
                    <Switch.Control >
                        <Switch.Thumb>
                            <Switch.Icon>
                                {isSelected ? (
                                    <Moon className="size-3" />
                                ) : (
                                    <Sun className="size-3" />
                                )}
                            </Switch.Icon>
                        </Switch.Thumb>
                    </Switch.Control>
                </>
            )}
        </Switch>
    )
};