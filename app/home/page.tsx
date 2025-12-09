"use client";

import { useTheme } from "next-themes";
import FlickerText from "./_components/flicker-text";

export default function Home() {
    const { theme } = useTheme();

    return (
        <>
            {theme === "custom-dark" ? (
                <FlickerText text="TOM YALDA" />
            ) : (
                <h1
                    className={`font-neon text-9xl ${
                        theme === "custom-dark" ? "text-glow" : ""
                    } w-full text-center justify-center flex mt-20`}
                >
                    TOM YALDA
                </h1>
            )}
        </>
    );
}
