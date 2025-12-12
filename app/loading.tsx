import SpinningIcon from "@/components/spinning-icon";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
                <SpinningIcon />
                <p className="text-2xl">
                    Good things come to those who wait...
                </p>
            </div>
        </div>
    );
}
