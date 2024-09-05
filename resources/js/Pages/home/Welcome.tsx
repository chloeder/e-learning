import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Head } from "@inertiajs/react";
import { Library } from "lucide-react";
import { CarouselSection } from "./partials/carousel-section";
import { Content } from "./partials/content";
import { HeroSection } from "./partials/hero-section";
import {
    HomeButton,
    HomeContentSection,
    HomeFooterSection,
    HomeHeading,
    HomeReviewSection,
    HomeSection,
    HomeSubheading,
} from "./partials/home-partials";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Welcome() {
    return (
        <HomeSection>
            {/* Head For Meta Title */}
            <Head>
                <title>Home</title>
            </Head>

            {/* Component Hero Section */}
            <HeroSection />

            {/* Carousel Section */}
            <CarouselSection />

            <HomeContentSection className="p-4 ">
                <HomeHeading className="text-xl">Series</HomeHeading>
                <HomeSubheading className="mb-5">
                    Get the latest series that we have published.
                </HomeSubheading>

                <Content />

                <HomeButton className="w-1/2 p-1 rounded-lg ms-auto justify-end items-center bg-orange-500 hover:bg-orange-400 text-white">
                    Show More
                </HomeButton>
            </HomeContentSection>

            <Separator className="my-5" />

            <HomeContentSection className="p-4 mb-10">
                <HomeHeading className="text-xl">Articles</HomeHeading>
                <HomeSubheading className="mb-5">
                    Get the latest articles that we have published.
                </HomeSubheading>

                <Card className="mb-5">
                    <CardHeader className="flex-row justify-between items-center">
                        <Library />
                        <span className="text-sm text-zinc-300 font-semibold">
                            1.2k Words
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
                    </CardFooter>
                </Card>

                <HomeButton className="w-1/2 p-1 rounded-lg ms-auto justify-end items-center bg-orange-500 hover:bg-orange-400 text-white">
                    Show More
                </HomeButton>
            </HomeContentSection>

            <HomeReviewSection className="p-4">
                <HomeHeading className="text-xl">
                    What are they say?
                </HomeHeading>
                <HomeSubheading className="mb-4">
                    Developers and lecturers reveal how we helped them achieve
                    success.
                </HomeSubheading>

                <div className="overflow-hidden h-[500px] relative">
                    <div className="animate-scroll-up flex flex-col shadow-xl">
                        <Card className="flex flex-col justify-center p-4 gap-4 rounded-2xl mb-4">
                            <div className="tracking-wide text-md font-medium">
                                "I love it. I can't live without it".
                            </div>
                            <div className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                </Avatar>
                                <p className="text-sm text-zinc-400">
                                    Shadiq Alatas
                                </p>
                            </div>
                        </Card>
                        <Card className="flex flex-col justify-center p-4 gap-4 rounded-2xl mb-4">
                            <div className="tracking-wide text-md font-medium">
                                "I love it. I can't live without it".
                            </div>
                            <div className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                </Avatar>
                                <p className="text-sm text-zinc-400">
                                    Shadiq Alatas
                                </p>
                            </div>
                        </Card>
                        <Card className="flex flex-col justify-center p-4 gap-4 rounded-2xl mb-4">
                            <div className="tracking-wide text-md font-medium">
                                "I love it. I can't live without it".
                            </div>
                            <div className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                </Avatar>
                                <p className="text-sm text-zinc-400">
                                    Shadiq Alatas
                                </p>
                            </div>
                        </Card>
                        <Card className="flex flex-col justify-center p-4 gap-4 rounded-2xl mb-4">
                            <div className="tracking-wide text-md font-medium">
                                "I love it. I can't live without it".
                            </div>
                            <div className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                </Avatar>
                                <p className="text-sm text-zinc-400">
                                    Shadiq Alatas
                                </p>
                            </div>
                        </Card>
                        <Card className="flex flex-col justify-center p-4 gap-4 rounded-2xl mb-4">
                            <div className="tracking-wide text-md font-medium">
                                "I love it. I can't live without it".
                            </div>
                            <div className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                </Avatar>
                                <p className="text-sm text-zinc-400">
                                    Shadiq Alatas
                                </p>
                            </div>
                        </Card>
                        <Card className="flex flex-col justify-center p-4 gap-4 rounded-2xl mb-4">
                            <div className="tracking-wide text-md font-medium">
                                "I love it. I can't live without it".
                            </div>
                            <div className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                </Avatar>
                                <p className="text-sm text-zinc-400">
                                    Shadiq Alatas
                                </p>
                            </div>
                        </Card>
                        <Card className="flex flex-col justify-center p-4 gap-4 rounded-2xl mb-4">
                            <div className="tracking-wide text-md font-medium">
                                "I love it. I can't live without it".
                            </div>
                            <div className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                </Avatar>
                                <p className="text-sm text-zinc-400">
                                    Shadiq Alatas
                                </p>
                            </div>
                        </Card>
                        <Card className="flex flex-col justify-center p-4 gap-4 rounded-2xl mb-4">
                            <div className="tracking-wide text-md font-medium">
                                "I love it. I can't live without it".
                            </div>
                            <div className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                </Avatar>
                                <p className="text-sm text-zinc-400">
                                    Shadiq Alatas
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </HomeReviewSection>

            <HomeFooterSection className="p-4">
                <div className="flex flex-col text-sm text-zinc-400 mb-10">
                    <p className="mb-2">Newsletter</p>
                    <p className="mb-6">
                        Subscribe with 23,000+ others and never miss
                        screencasts, tips, tutorials and more.
                    </p>

                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input
                            className="rounded-full w-full"
                            type="email"
                            placeholder="Email"
                        />
                        <Button type="submit" className="rounded-full">
                            Subscribe
                        </Button>
                    </div>
                </div>
                <p className="text-center text-sm text-zinc-400">
                    © 2021 Shad Alatas. All rights reserved.
                </p>
            </HomeFooterSection>
        </HomeSection>
    );
}
