import { Breadcrumb, Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Card } from "@/components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { toast } from "sonner";
import { TagsForm } from "./partials/tags-form";

export default function Create({ auth }: PageProps) {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("tags.store"), {
            onSuccess: () => {
                toast.success("Tags has been created!", {
                    position: "top-center",
                });
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <Breadcrumbs>
                    <Breadcrumb href="#">Home</Breadcrumb>
                    <Breadcrumb href={route("tags.index")}>Tags</Breadcrumb>
                    <Breadcrumb>Create Tags</Breadcrumb>
                </Breadcrumbs>
            }
        >
            <Head title="Tags" />
            <Card className="min-w-lg m-4 bg-zinc-800">
                <Card.Header>
                    <Card.Title>Form Create Tags</Card.Title>
                    <Card.Description>
                        Create a new tags to be published on the blog.
                    </Card.Description>
                </Card.Header>
                <Card.Content>
                    <TagsForm
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
