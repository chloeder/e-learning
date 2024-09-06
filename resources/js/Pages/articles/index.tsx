import { Breadcrumb, Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Article, PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { IconPlus } from "justd-icons";
import { ArticleTable } from "./partials/article-table";

export default function Index({
    auth,
    articles,
}: PageProps<{ articles: Article[] }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <Breadcrumbs>
                    <Breadcrumb href="#">Home</Breadcrumb>
                    <Breadcrumb>Articles</Breadcrumb>
                </Breadcrumbs>
            }
        >
            <Head title="Articles" />
            <Card className="m-4">
                <div className="flex justify-end">
                    <Link
                        className={buttonStyles({
                            intent: "primary",
                            size: "extra-small",
                            className: "m-4",
                        })}
                        href={route("articles.create")}
                    >
                        <IconPlus className="w-4 h-4" />
                        Crate Articles
                    </Link>
                </div>
                <ArticleTable articles={articles} />
            </Card>
        </AuthenticatedLayout>
    );
}
