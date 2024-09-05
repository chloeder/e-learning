import { Card } from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";
import {
    HomeCarouselSection,
    HomeHeading,
    HomeSubheading,
} from "./home-partials";

export function CarouselSection() {
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
                className="w-full  p-4 mt-4 bg-zinc-200/80 dark:bg-zinc-900"
            >
                <Carousel.Content
                    items={Array.from({ length: 16 }, (_, id) => ({
                        id: id + 1,
                    }))}
                >
                    {({ id }) => (
                        <Carousel.Item id={id} className="lg:basis-1/3">
                            <Card className="flex aspect-square items-center justify-center">
                                <Card.Title>{id}</Card.Title>
                            </Card>
                        </Carousel.Item>
                    )}
                </Carousel.Content>

                <Carousel.Handler className="justify-center">
                    <Carousel.Button slot="previous" />
                    <Carousel.Button slot="next" />
                </Carousel.Handler>
            </Carousel>
        </HomeCarouselSection>
    );
}
