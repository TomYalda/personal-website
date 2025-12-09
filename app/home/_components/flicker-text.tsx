"use client";
import { motion } from "framer-motion";

export default function FlickerText({ text }: { text: string }) {
    return (
        <div className="flex w-full justify-center mt-20">
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="font-neon text-9xl text-glow inline-block motion-safe"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </div>
    );
}
