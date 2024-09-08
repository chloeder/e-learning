import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const quotes = [
    "In this series we will learn how to notify all errors from our laravel application to our own telegram.",
    "Learn how to build scalable web applications with React and Node.js.",
    "Master the art of debugging and optimizing your code.",
    "Explore the latest features in JavaScript and TypeScript.",
    "Understand the principles of clean code and software design.",
];

const names = [
    "Steward Lumowa",
    "Jane Doe",
    "John Smith",
    "Alice Johnson",
    "Bob Brown",
];
const initials = ["SL", "JD", "JS", "AJ", "BB"];

export function ReviewSection() {
    return (
        <div className="overflow-hidden h-[500px] relative ">
            <div className="animate-scroll-up flex flex-col shadow-xl gap-4 md:w-ful md:flex-row md:flex-wrap">
                {Array.from({ length: 30 }).map((_, index) => {
                    const randomQuote =
                        quotes[Math.floor(Math.random() * quotes.length)];
                    const randomName =
                        names[Math.floor(Math.random() * names.length)];
                    const randomInitials =
                        initials[Math.floor(Math.random() * initials.length)];

                    return (
                        <Card key={index} className="max-w-lg md:w-full">
                            <Card.Content className="mt-4">
                                <p className="text-zinc-400 mb-4">
                                    {randomQuote}
                                </p>
                                <div className="flex items-center">
                                    <Avatar
                                        alt={randomName}
                                        initials={randomInitials}
                                    />
                                    <span className="ml-2 font-semibold">
                                        {randomName}
                                    </span>
                                </div>
                            </Card.Content>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
