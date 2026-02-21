"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="data-theme"
            defaultTheme="custom-dark"
            themes={["custom-light", "custom-dark"]}
            enableSystem={false}
        >
            {children}
        </ThemeProvider>
    );
}
