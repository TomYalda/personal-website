"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
            <p className="font-neon text-9xl text-glow w-full text-center justify-center flex mt-20">
                {text}
            </p>
        );
    }

    return (
        <div className="flex w-full justify-center mt-20">
            {text.split("").map((char, index) => {
                const animation = charAnimations[index];
                if (!animation) return null;

                return (
                    <motion.span
                        key={index}
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
                        className="font-neon text-9xl text-glow inline-block motion-safe"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                );
            })}
        </div>
    );
}
