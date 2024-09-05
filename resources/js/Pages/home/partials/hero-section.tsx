import { Library, Play } from "lucide-react";
import {
    HomeHeroSection,
    HomeHeading,
    HomeSubheading,
    HomeButton,
} from "./home-partials";

export function HeroSection() {
    return (
        <HomeHeroSection className="p-4 gap-6 mb-20">
            <HomeHeading className="inline text-4xl">
                Effective Screencasts For
                <div className="ml-2 inline font-semibold text-[20px] border-2 border-black dark:border-white rounded-xl px-3 -rotate-1 tracking-tighter">
                    Web Developers
                </div>
            </HomeHeading>

            <HomeSubheading>
                <b>Unlock Your Coding</b> Potential Dive into programming with
                the best resources designed for beginners. Whether you want
                interactive lessons, video tutorials, or comprehensive courses,
                find the perfect fit to start your coding journey today.
            </HomeSubheading>

            <div className="flex items-center gap-4">
                <HomeButton className="flex items-center bg-orange-500 hover:bg-orange-400 text-white">
                    <Play size={14} className="mr-2" />
                    <span className="font-semibold text-sm">Find Series</span>
                </HomeButton>
                <HomeButton className="flex items-center border bg-white text-black">
                    <Library size={14} className="mr-2" />
                    <span className="font-semibold text-sm">Read Articles</span>
                </HomeButton>
            </div>
        </HomeHeroSection>
    );
}
