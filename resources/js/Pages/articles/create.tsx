import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { TagField } from "@/components/ui/tag-field";
import { TextField } from "@/components/ui/text-field";
import { Textarea } from "@/components/ui/textarea";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import toast from "react-hot-toast";
import { useListData } from "react-stately";

export default function Create({ auth }: PageProps) {
    const selectedItems = useListData({
        initialItems: [],
    });

    const { data, setData, post, processing, errors } = useForm({
        title: "",
        description: "",
        content: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("articles.store"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-zinc-800 dark:text-zinc-200 leading-tight">
                    Create Articles
                </h2>
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
                    <Form validationErrors={errors} onSubmit={submit}>
                        <TextField
                            id="title"
                            label="Title"
                            name="title"
                            value={data.title}
                            onChange={(v) => setData("title", v)}
                            className="mb-2 text-white"
                            errorMessage={errors.title}
                        />
                        <TextField
                            id="description"
                            label="Description"
                            name="description"
                            value={data.description}
                            onChange={(v) => setData("description", v)}
                            className="mb-2"
                            errorMessage={errors.description}
                        />
                        <Textarea
                            id="content"
                            label="Content"
                            name="content"
                            value={data.content}
                            onChange={(v) => setData("content", v)}
                            className="mb-2"
                            errorMessage={errors.content}
                        />
                        {/* <TagField
                            onItemInserted={(v) => setData("tags", v)}
                            name="tags"
                            intent="secondary"
                            appearance="cool"
                            className="min-w-sm mb-4"
                            max={3}
                            label="Tags"
                            list={selectedItems}
                            errorMessage={errors.tags}
                        /> */}
                        <Button
                            type="submit"
                            size="small"
                            isDisabled={processing}
                        >
                            Submit
                        </Button>
                    </Form>
                </Card.Content>
            </Card>
        </AuthenticatedLayout>
    );
}
