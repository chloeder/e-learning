import { Breadcrumb, Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Card } from "@/components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { SeriesForm } from "./partials/series-form";
import { toast } from "sonner";

export default function Create({ auth }: PageProps) {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        description: "",
        video_url: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("series.store"), {
            onSuccess: () => {
                toast.success("Series has been created!", {
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
                    <Breadcrumb href={route("series.index")}>Series</Breadcrumb>
                    <Breadcrumb>Create Series</Breadcrumb>
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
                    <SeriesForm
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
