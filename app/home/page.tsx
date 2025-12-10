"use client";

import { useTheme } from "next-themes";
import FlickerText from "./_components/flicker-text";
import { Button } from "@heroui/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-3xl w-full text-center justify-center flex">
                Welcome, my name is
            </h1>
            {theme === "custom-dark" ? (
                <FlickerText text="TOM YALDA." />
            ) : (
                <h1 className="font-neon text-8xl w-full text-center justify-center flex mt-20">
                    TOM YALDA.
                </h1>
            )}
            <h1 className="text-3xl w-full text-center justify-center flex mt-10">
                I bring ideas to life through code.
            </h1>
            <h3 className="text-xl w-full text-center justify-center flex mt-20 mb-20">
                Software Engineer | Web Developer | Tech Enthusiast
            </h3>
            <div className="flex flex-row gap-6">
                <Link href="/portfolio" className="flex justify-center">
                    <Button
                        variant="primary"
                        size="lg"
                        className="flex items-center gap-2"
                    >
                        <ArrowRight className="size-4" />
                        Explore my portfolio
                    </Button>
                </Link>
                <Link href="/contact" className="flex justify-center">
                    <Button
                        variant="primary"
                        size="lg"
                        className="flex items-center gap-2"
                    >
                        <ArrowRight className="size-4" />
                        Get in touch
                    </Button>
                </Link>
            </div>
        </div>
    );
}
