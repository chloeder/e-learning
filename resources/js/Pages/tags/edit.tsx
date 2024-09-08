import { Card } from "@/components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, Tags } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { toast } from "sonner";
import { TagsForm } from "./partials/tags-form";

export default function Edit({ auth, tags }: PageProps<{ tags: Tags }>) {
    const { data, setData, patch, processing, errors } = useForm({
        title: tags.title,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route("tags.update", tags.id), {
            onSuccess: () => {
                toast.success("Tags has been updated!", {
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
                    Edit Tags
                </h2>
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
