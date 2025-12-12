"use client";

import { Switch } from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useMountedTheme } from "@/hooks/use-mounted-theme";

export default function ThemeSwitcher() {
    const { mounted, currentTheme, setTheme } = useMountedTheme();

    if (!mounted) return null;

    return (
        <Switch
            isSelected={currentTheme === "custom-dark"}
            onChange={(isSelected) =>
                setTheme(isSelected ? "custom-dark" : "custom-light")
            }
            className="scale-150 ml-4"
            size="lg"
        >
            {({ isSelected }) => (
                <>
                    <Switch.Control>
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
    );
}
