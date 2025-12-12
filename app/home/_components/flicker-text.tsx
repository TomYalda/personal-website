"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type CharAnimation = {
    delay: number;
    repeatDelay: number;
};

type FlickerTextProps = {
    text: string;
};

export default function FlickerText({ text }: FlickerTextProps) {
    const [charAnimations, setCharAnimations] = useState<CharAnimation[]>([]);
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const generateAnimations = () => {
            const animations = text.split("").map(() => ({
                delay: 2 + Math.random() * 3,
                repeatDelay: 4 + Math.random() * 4,
            }));
            setCharAnimations(animations);
            setMounted(true);
        };

        generateAnimations();
    }, [text]);

    if (!mounted) {
        return (
            <p className="font-neon text-8xl w-full text-center justify-center flex mt-20">
                {text}
            </p>
        );
    }

    return (
        <div className="flex flex-wrap w-full justify-center items-center mt-20 gap-x-4">
            {text.split(" ").map((word, wordIndex) => (
                <div key={wordIndex} className="flex">
                    {word.split("").map((char, charIndex) => {
                        const globalCharIndex =
                            text.split(" ").slice(0, wordIndex).join(" ")
                                .length +
                            (wordIndex > 0 ? 1 : 0) +
                            charIndex;
                        const animation = charAnimations[globalCharIndex];
                        if (!animation) return null;

                        if (theme !== "custom-dark") {
                            return (
                                <span
                                    key={`${wordIndex}-${charIndex}`}
                                    className="font-neon text-8xl"
                                >
                                    {char}
                                </span>
                            );
                        }

                        return (
                            <motion.span
                                key={`${wordIndex}-${charIndex}`}
                                animate={{
                                    opacity: [1, 0, 1],
                                }}
                                transition={{
                                    duration: 0.2,
                                    delay: animation.delay,
                                    repeat: Infinity,
                                    repeatDelay: animation.repeatDelay,
                                    repeatType: "loop",
                                }}
                                className="font-neon text-8xl text-glow motion-safe"
                            >
                                {char}
                            </motion.span>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
