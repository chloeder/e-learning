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
    tag: Tags;
    length: number;
}

export interface Series {
    id: number;
    title: string;
    description: string;
    video_url?: string;
    tag: Tags;
    length: number;
}

export interface Tags {
    id: number;
    title: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    articles: Article;
    series: Series;
    tags: Tags;
    ziggy: Config & { location: string };
};
