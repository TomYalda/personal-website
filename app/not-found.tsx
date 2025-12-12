"use client";

import Link from "next/link";
import { pageRoutes } from "@/lib/routes";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import FlickerText from "@/components/flicker-text";

export default function NotFound() {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-16">
            <FlickerText text="PAGE NOT FOUND" />
            <h1 className="text-3xl w-full text-center justify-center flex gap-4 flex-col">
                Nothing to see here...
            </h1>
            <div className="flex flex-row gap-6">
                <Button
                    variant="primary"
                    size="lg"
                    className="flex items-center gap-2"
                    onClick={() => router.back()}
                >
                    <ArrowRight className="size-4" />
                    Go back
                </Button>

                <Link href={pageRoutes.HOME} className="flex justify-center">
                    <Button
                        variant="primary"
                        size="lg"
                        className="flex items-center gap-2"
                    >
                        <ArrowRight className="size-4" />
                        Return home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
