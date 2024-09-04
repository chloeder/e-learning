import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { HeroSection } from "./partials/HeroSection";
import { CarouselSection } from "./partials/CarouselSection";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <main className="max-h-screen">
            <Head title="Welcome" />
            <HeroSection />
            <CarouselSection />
        </main>
    );
}
