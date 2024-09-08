import { NavigationBar } from "@/components/navigation-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Article, Series } from "@/types";
import { Head } from "@inertiajs/react";
import { CarouselSection } from "./partials/carousel-section";
import { Content } from "./partials/content";
import { HeroSection } from "./partials/hero-section";
import {
    HomeContentSection,
    HomeFooterSection,
    HomeHeading,
    HomeReviewSection,
    HomeSection,
    HomeSubheading,
} from "./partials/home-partials";
import { ReviewSection } from "./partials/review-section";

export default function Welcome({
    articles,
    series,
}: {
    articles: Article[];
    series: Series[];
}) {
    const articleLength = articles.length;
    const seriesLength = series.length;

    return (
        <>
            <NavigationBar />

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

                    <div className="lg:flex lg:basis-1/2 gap-4">
                        {" "}
                        {series.map((item: Series) => (
                            <Content
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                tags={item.tag.title}
                                episodes={seriesLength}
                            />
                        ))}
                    </div>

                    {/* <Button className="p-2 ms-auto mt-4" size="small">
                        Show More
                    </Button> */}
                </HomeContentSection>

                <Separator className="my-5" />

                <HomeContentSection className="p-4 mb-10">
                    <HomeHeading className="text-xl">Articles</HomeHeading>
                    <HomeSubheading className="mb-5">
                        Get the latest articles that we have published.
                    </HomeSubheading>

                    <div className="flex flex-col gap-2 md:flex md:flex-col md:gap-4 lg:flex lg:flex-row lg:flex-wrap lg:gap-4">
                        {articles.map((item: Article) => (
                            <Content
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                tags={item.tag.title}
                                episodes={articleLength}
                            />
                        ))}
                    </div>

                    {/* <Button className="p-2 ms-auto mt-4" size="small">
                        Show More
                    </Button> */}
                </HomeContentSection>

                <HomeReviewSection className="p-4">
                    <HomeHeading className="text-xl">
                        What are they say?
                    </HomeHeading>
                    <HomeSubheading className="mb-4">
                        Developers and lecturers reveal how we helped them
                        achieve success.
                    </HomeSubheading>

                    <ReviewSection />
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
        </>
    );
}
