import { Head } from "@inertiajs/react";
import { CarouselSection } from "./partials/CarouselSection";
import { HeroSection } from "./partials/HeroSection";

export default function Welcome() {
    // const handleImageError = () => {
    //     document
    //         .getElementById("screenshot-container")
    //         ?.classList.add("!hidden");
    //     document.getElementById("docs-card")?.classList.add("!row-span-1");
    //     document
    //         .getElementById("docs-card-content")
    //         ?.classList.add("!flex-row");
    //     document.getElementById("background")?.classList.add("!hidden");
    // };

    return (
        <main className="max-h-screen">
            <Head title="Welcome" />
            <HeroSection />
            <CarouselSection />
        </main>
    );
}
