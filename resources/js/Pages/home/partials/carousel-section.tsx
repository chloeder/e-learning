import { Card } from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";
import { usePage } from "@inertiajs/react";
import { Play } from "lucide-react";
import {
    HomeCarouselSection,
    HomeHeading,
    HomeSubheading,
} from "./home-partials";

export function CarouselSection() {
    const { articles, series } = usePage<any>().props;
    const items = [...articles, ...series];

    return (
        <HomeCarouselSection className="mb-10">
            <HomeHeading className="text-xl px-4">
                What do you want to learn today?
            </HomeHeading>
            <HomeSubheading className="px-4">
                {" "}
                Hey, there are lots of interesting choices here, you know! Come
                on, find something fun to learn.
            </HomeSubheading>

            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="w-full p-4 mt-4 bg-zinc-200/80 dark:bg-zinc-900"
            >
                <Carousel.Content items={items}>
                    {items.map(({ id, title, description }) => (
                        <Carousel.Item
                            key={id}
                            className="lg:flex lg:basis-1/4 lg:gap-4"
                        >
                            <Card className="flex flex-col aspect-square items-center justify-center lg:w-[400px] lg:h-[300px]">
                                <Card.Header className="">
                                    <Card.Title>
                                        <Play />
                                    </Card.Title>
                                </Card.Header>
                                <Card.Content>
                                    <h1 className="font-bold mb-4">{title}</h1>
                                    <p className="text-sm text-zinc-400">
                                        {description}
                                    </p>
                                </Card.Content>
                            </Card>
                        </Carousel.Item>
                    ))}
                </Carousel.Content>

                <Carousel.Handler className="justify-center">
                    <Carousel.Button slot="previous" />
                    <Carousel.Button slot="next" />
                </Carousel.Handler>
            </Carousel>
        </HomeCarouselSection>
    );
}
