import NavigationBar from "@/components/navigation-bar";
import Background from "@/components/particle-background/background";

export default function App() {
  return (
    <div className="relative flex min-h-screen items-center justify-center font-sans bg-background">
      <div className="absolute inset-0 z-0">
        <Background />
      </div>
      <main className="relative z-10 flex min-h-screen w-full flex-col items-center justify-between py-8 px-8 sm:items-start text-foreground">
        <NavigationBar />
      </main>
    </div>
  );
}
