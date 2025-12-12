import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function useMountedTheme(fallbackTheme: string = "custom-dark") {
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const id = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(id);
    }, []);

    const currentTheme = mounted ? resolvedTheme || theme : fallbackTheme;

    return {
        mounted,
        currentTheme,
        setTheme,
    };
}
