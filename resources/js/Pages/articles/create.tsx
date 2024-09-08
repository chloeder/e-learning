import { Breadcrumb, Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Card } from "@/components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { ArticleForm } from "./partials/article-form";
import { toast } from "sonner";

export default function Create({ auth }: PageProps) {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        description: "",
        content: "",
        tag_id: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("articles.store"), {
            onSuccess: () => {
                toast.success("Article has been created!", {
                    position: "top-center",
                });
            },
        });
        console.log(data);
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
                    <Breadcrumb>Create Articles</Breadcrumb>
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
