import { Button } from "@/components/ui/button";
import { Library, Play } from "lucide-react";
import { HomeHeading, HomeHeroSection, HomeSubheading } from "./home-partials";

export function HeroSection() {
    return (
        <HomeHeroSection className="p-4 gap-6 mb-20 md:m-16 lg:mb-36 lg:min-w lg:m-32">
            <HomeHeading className="inline text-4xl md:text-7xl lg:text-8xl font-extrabold">
                Effective Screencasts For
                <div className="ml-2 lg:ml-4 inline md:block lg:block max-w-max font-semibold text-[24px] md:text-4xl lg:text-6xl border-2 border-black dark:border-white rounded-xl px-3 -rotate-4 tracking-tighter">
                    Web Developers
                </div>
            </HomeHeading>

            <HomeSubheading className="lg:text-xl">
                <b>Unlock Your Coding</b> Potential Dive into programming with
                the best resources designed for beginners. Whether you want
                interactive lessons, video tutorials, or comprehensive courses,
                find the perfect fit to start your coding journey today.
            </HomeSubheading>

            <div className="flex items-center gap-4">
                <Button className="flex items-center dark:text-white">
                    <Play size={14} className="mr-2" />
                    <span className="font-semibold text-sm">Find Series</span>
                </Button>
                <Button className="flex items-center text-black" intent="light">
                    <Library size={14} className="mr-2" />
                    <span className="font-semibold text-sm">Read Articles</span>
                </Button>
            </div>
        </HomeHeroSection>
    );
}
