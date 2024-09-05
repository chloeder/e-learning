import { Head } from "@inertiajs/react";
import { CarouselSection } from "./partials/carousel-section";
import { HeroSection } from "./partials/hero-section";
import {
    HomeButton,
    HomeContentSection,
    HomeHeading,
    HomeSection,
    HomeSubheading,
} from "./partials/home-partials";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Library, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Welcome() {
    return (
        <HomeSection>
            <Head>
                <title>Home</title>
            </Head>

            <HeroSection />

            <CarouselSection />

            <HomeContentSection className="p-4 ">
                <HomeHeading className="text-xl">Series</HomeHeading>
                <HomeSubheading className="mb-5">
                    Get the latest series that we have published.
                </HomeSubheading>

                <Card className="mb-5">
                    <CardHeader className="flex-row justify-between items-center">
                        <Play />
                        <span className="text-sm text-zinc-300 font-semibold">
                            120 Min
                        </span>
                    </CardHeader>
                    <CardContent>
                        <h1 className="font-bold mb-4">
                            Kirim Error di Telegram
                        </h1>
                        <p className="text-sm text-zinc-400">
                            In this series we will learn how to notify all
                            errors from our laravel application to our own
                            telegram.
                        </p>
                    </CardContent>
                    <CardFooter className="justify-between">
                        <Badge className="bg-orange-500 text-white">
                            NextJs
                        </Badge>
                        <span className="text-sm text-zinc-400">12 Eps</span>
                    </CardFooter>
                </Card>

                <HomeButton className="w-1/2 p-1 rounded-lg ms-auto justify-end items-center bg-orange-500 hover:bg-orange-400 text-white">
                    Show More
                </HomeButton>
            </HomeContentSection>

            <Separator className="my-10" />

            <HomeContentSection className="p-4">
                <HomeHeading className="text-xl">Articles</HomeHeading>
                <HomeSubheading className="mb-5">
                    Get the latest articles that we have published.
                </HomeSubheading>

                <Card className="mb-5">
                    <CardHeader className="flex-row justify-between items-center">
                        <Library />
                        <span className="text-sm text-zinc-300 font-semibold">
                            120 Min
                        </span>
                    </CardHeader>
                    <CardContent>
                        <h1 className="font-bold mb-4">
                            Handling Error in Laravel
                        </h1>
                        <p className="text-sm text-zinc-400">
                            In this articles we will learn how to notify all
                            errors from our laravel application to our own
                            telegram.
                        </p>
                    </CardContent>
                    <CardFooter className="justify-between">
                        <Badge className="bg-orange-500 text-white">
                            Laravel
                        </Badge>
                        <span className="text-sm text-zinc-400">12 Eps</span>
                    </CardFooter>
                </Card>

                <HomeButton className="w-1/2 p-1 rounded-lg ms-auto justify-end items-center bg-orange-500 hover:bg-orange-400 text-white">
                    Show More
                </HomeButton>
            </HomeContentSection>
        </HomeSection>
    );
}
