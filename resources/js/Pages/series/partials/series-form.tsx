import { Button } from "@/components/ui/button";
import { FileTrigger } from "@/components/ui/file-trigger";
import { Form } from "@/components/ui/form";
import { Loader } from "@/components/ui/loader";
import { TextField } from "@/components/ui/text-field";
import { IconBrandYoutube } from "justd-icons";
import { FormEvent } from "react";

interface ArticleFormProps {
    data: {
        title: string;
        description: string;
        video_url: string;
        slug: string;
    };
    setData: (key: string, value: string) => void;
    errors: {
        title?: string;
        description?: string;
        video_url?: string;
        slug?: string;
    };
    submit: (e: FormEvent<HTMLFormElement>) => void;
    processing: boolean;
}

export function SeriesForm({
    data,
    setData,
    errors,
    submit,
    processing,
}: ArticleFormProps) {
    const toSnakeCase = (str: string): string => {
        return str.replace(/\s+/g, "-").toLowerCase();
    };

    return (
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
            <TextField
                label="Video URL"
                prefix={<IconBrandYoutube />}
                className="mb-4"
            />
            <TextField
                isReadOnly
                id="slug"
                label="Slug"
                name="slug"
                value={toSnakeCase(data.title)}
                onChange={(v) => setData("slug", v)}
                className="mb-2"
                errorMessage={errors.slug}
            />

            {processing ? (
                <Button type="submit" size="small" isDisabled={processing}>
                    <Loader className="mr-2" /> Submitting...
                </Button>
            ) : (
                <Button type="submit" size="small">
                    Submit
                </Button>
            )}
        </Form>
    );
}
