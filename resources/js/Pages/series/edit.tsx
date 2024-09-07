import { Card } from "@/components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, Series } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { SeriesForm } from "./partials/series-form";
import { FormEventHandler } from "react";
import { toast } from "sonner";

export default function Edit({ auth, series }: PageProps<{ series: Series }>) {
    const { data, setData, patch, processing, errors } = useForm({
        title: series.title,
        description: series.description,
        video_url: series.video_url,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route("series.update", series.id), {
            onSuccess: () => {
                toast.success("Series has been updated!", {
                    position: "top-center",
                });
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-zinc-800 dark:text-zinc-200 leading-tight">
                    Edit Series
                </h2>
            }
        >
            <Head title="Series" />
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
