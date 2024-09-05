import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

export function Content() {
    return (
        <Card className="max-w-lg">
            <Card.Header className="flex-row items-center justify-between">
                <Card.Title>
                    <Play />
                </Card.Title>
                <Card.Description>120 Minutes</Card.Description>
            </Card.Header>
            <Card.Content>
                <h1 className="font-bold mb-4">Kirim Error di Telegram</h1>
                <p className="text-sm text-zinc-400">
                    In this series we will learn how to notify all errors from
                    our laravel application to our own telegram.
                </p>
            </Card.Content>
            <Card.Footer className="justify-between">
                <Badge intent="secondary">NextJs</Badge>
                <span className="text-sm text-zinc-400">12 Eps</span>
            </Card.Footer>
        </Card>
    );
}
