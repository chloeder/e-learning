import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardHeader,
    CardFooter,
    CardContent,
} from "@/components/ui/card";
import { Play } from "lucide-react";

export function Content() {
    return (
        <Card className="mb-5">
            <CardHeader className="flex-row justify-between items-center">
                <Play />
                <span className="text-sm text-zinc-300 font-semibold">
                    120 Min
                </span>
            </CardHeader>
            <CardContent>
                <h1 className="font-bold mb-4">Kirim Error di Telegram</h1>
                <p className="text-sm text-zinc-400">
                    In this series we will learn how to notify all errors from
                    our laravel application to our own telegram.
                </p>
            </CardContent>
            <CardFooter className="justify-between">
                <Badge className="bg-orange-500 text-white">NextJs</Badge>
                <span className="text-sm text-zinc-400">12 Eps</span>
            </CardFooter>
        </Card>
    );
}
