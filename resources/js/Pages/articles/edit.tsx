import { Breadcrumb, Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Card } from "@/components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Article, PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { ArticleForm } from "./partials/article-form";

export default function Edit({
    auth,
    article,
}: PageProps<{ article: Article }>) {
    const { data, setData, patch, processing, errors } = useForm({
        title: article.title,
        description: article.description,
        content: article.content,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route("articles.update", article.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <Breadcrumbs>
                    <Breadcrumb href="#">Home</Breadcrumb>
                    <Breadcrumb href={route("articles.index")}>
                        Articles
                    </Breadcrumb>
                    <Breadcrumb>Edit Articles</Breadcrumb>
                </Breadcrumbs>
            }
        >
            <Head title="Articles" />

            <Card className="min-w-lg m-4 bg-zinc-800">
                <Card.Header>
                    <Card.Title>Form Create Articles</Card.Title>
                    <Card.Description>
                        Create a new article to be published on the blog.
                    </Card.Description>
                </Card.Header>
                <Card.Content>
                    <ArticleForm
                        data={data}
                        setData={setData}
                        errors={errors}
                        submit={submit}
                        processing={processing}
                    />
                </Card.Content>
            </Card>
        </AuthenticatedLayout>
    );
}
