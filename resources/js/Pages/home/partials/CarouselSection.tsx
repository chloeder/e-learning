import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";

export function CarouselSection() {
    return (
        <section className="flex flex-col">
            <h1 className="font-semibold text-lg tracking-tight px-4">
                What do you want to learn today?
            </h1>
            <p className="text-sm tracking-tighter px-4">
                Hey, there are lots of interesting choices here, you know! Come
                on, find something fun to learn.
            </p>
            <Carousel className="w-full p-4 mt-4 bg-gray-200/80  ">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="md:basis-1/2 lg:basis-1/3"
                        >
                            <Card>
                                <CardHeader>Mantap</CardHeader>
                                <CardContent className="flex aspect-square items-center justify-center ">
                                    <span className="text-4xl font-semibold">
                                        {index + 1}
                                    </span>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex justify-center items-center gap-4 mt-4">
                    {" "}
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </section>
    );
}
