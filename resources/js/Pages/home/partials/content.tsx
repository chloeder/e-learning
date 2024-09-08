import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

interface ContentProps {
    title: string;
    description: string;
    tags: string;
    episodes: number;
}

export function Content({ title, description, tags, episodes }: ContentProps) {
    return (
        <Card className="max-w-lg">
            <Card.Header className="flex-row items-center justify-between">
                <Card.Title>
                    <Play />
                </Card.Title>
            </Card.Header>
            <Card.Content>
                <h1 className="font-bold mb-4">{title}</h1>
                <p className="text-sm text-zinc-400">{description}</p>
            </Card.Content>
            <Card.Footer className="justify-between">
                <Badge intent="secondary">{tags}</Badge>
                <span className="text-sm text-zinc-400">{episodes} Eps</span>
            </Card.Footer>
        </Card>
    );
}
