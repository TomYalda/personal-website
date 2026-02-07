import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";
import Background from "@/components/particle-background/background";
import NavigationBar from "@/components/navigation-bar";
import localFont from "next/font/local";
import Footer from "@/components/footer";
import { Slide, ToastContainer } from "react-toastify";

const montserratFont = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

const neon = localFont({
    src: "../public/fonts/neonlux.ttf",
    variable: "--font-neon",
});

export const metadata: Metadata = {
    title: "Tom Yalda Website",
    description:
        "Hi, I'm Tom Yalda. Welcome to my personal website! I'm a software engineer specialising in bringing ideas to life through code. Here you'll find a little bit about me, including my portfolio, current projects, and ways to contact me.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${montserratFont.variable} ${neon.variable} ${montserratFont.className} antialiased`}
            >
                <Providers>
                    <ToastContainer
                        position="bottom-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss={false}
                        draggable
                        pauseOnHover={false}
                        theme="light"
                        transition={Slide}
                    />
                    <div className="relative w-full h-screen bg-background flex flex-col">
                        {/* Background */}
                        <div className="absolute inset-0 z-0">
                            <Background />
                        </div>
                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full">
                            <header className="shrink-0 z-20">
                                <NavigationBar />
                            </header>
                            <main className="flex-1 overflow-y-auto p-8 sm:p-16">
                                {children}
                            </main>
                            <footer className="shrink-0 z-20">
                                <Footer />
                            </footer>
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
