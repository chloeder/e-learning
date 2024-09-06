import { Config } from "ziggy-js";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export interface Article {
    id: number;
    title: string;
    description: string;
    content: string;
    tags: string;
    created_at: string;
    updated_at: string;
}

export interface Series {
    id: number;
    title: string;
    description: string;
    tags: string;
    video_url: string;
    slug: string;
    created_at: string;
    updated_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    articles: Article[];
    series: Series[];
    ziggy: Config & { location: string };
};
