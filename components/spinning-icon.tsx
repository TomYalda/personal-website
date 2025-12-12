"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useMountedTheme } from "@/hooks/use-mounted-theme";

export default function SpinningIcon() {
    const controls = useAnimation();
    const [index, setIndex] = useState(0);
    const { currentTheme } = useMountedTheme();
    const imagePath = currentTheme === "custom-dark" ? "dark/" : "light/";

    const icons = [
        `/background-icons/${imagePath}controller.png`,
        `/background-icons/${imagePath}curly-braces.png`,
        `/background-icons/${imagePath}dumbbell.png`,
        `/background-icons/${imagePath}football.png`,
        `/background-icons/${imagePath}html-braces.png`,
        `/background-icons/${imagePath}music.png`,
        `/background-icons/${imagePath}semicolon.png`,
    ];

    useEffect(() => {
        async function runAnimation() {
            await controls.start({
                scale: [0, 1],
                opacity: [0, 1],
                transition: { type: "spring", duration: 0.4 },
            });

            await controls.start({
                rotate: [0, 360],
                transition: { type: "spring", duration: 1, ease: "linear" },
            });

            await controls.start({
                scale: [1, 0],
                opacity: [1, 0],
                transition: { type: "spring", duration: 0.4 },
            });

            setIndex((prev) => (prev + 1) % icons.length);
        }

        runAnimation();
    }, [controls, icons.length, index]);

    return (
        <motion.img
            src={icons[index]}
            animate={controls}
            initial={{ scale: 0, opacity: 0 }}
            className="w-32 h-32 motion-safe"
        />
    );
}
