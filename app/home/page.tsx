"use client";

import FlickerText from "../../components/flicker-text";
import { Button } from "@heroui/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageRoutes } from "@/lib/routes";
import SpinningIcon from "@/components/spinning-icon";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-3xl w-full text-center justify-center flex">
                Welcome, my name is
            </h1>

            <FlickerText text="TOM YALDA." />

            <h1 className="text-3xl w-full text-center justify-center flex mt-10">
                I bring ideas to life through code.
            </h1>

            <h3 className="text-xl w-full text-center justify-center flex mt-20 mb-20">
                Software Engineer | Web Developer | Tech Enthusiast
            </h3>

            <div className="flex flex-row gap-6">
                <Link
                    href={pageRoutes.PORTFOLIO}
                    className="flex justify-center"
                >
                    <Button
                        variant="primary"
                        size="lg"
                        className="flex items-center gap-2"
                    >
                        <ArrowRight className="size-4" />
                        Explore my portfolio
                    </Button>
                </Link>

                <Link
                    href={pageRoutes.CONTACT_ME}
                    className="flex justify-center"
                >
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
