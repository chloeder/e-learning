import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Loader } from "@/components/ui/loader";
import { Select } from "@/components/ui/select";
import { TextField } from "@/components/ui/text-field";
import { Textarea } from "@/components/ui/textarea";
import { Tags } from "@/types";
import { usePage } from "@inertiajs/react";
import { FormEvent } from "react";

interface ArticleFormProps {
    data: {
        title: string;
        description: string;
        content: string;
        tag_id: string;
    };
    setData: (key: string, value: string) => void;
    errors: {
        title?: string;
        description?: string;
        content?: string;
        tag_id?: string;
    };
    submit: (e: FormEvent<HTMLFormElement>) => void;
    processing: boolean;
}

export function ArticleForm({
    data,
    setData,
    errors,
    submit,
    processing,
}: ArticleFormProps) {
    const { tags } = usePage<any>().props;

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
            <Textarea
                id="content"
                label="Content"
                name="content"
                value={data.content}
                onChange={(v) => setData("content", v)}
                className="mb-2"
                errorMessage={errors.content}
            />

            <Select
                label="Design software"
                placeholder="Select a tags"
                selectedKey={data.tag_id}
                onSelectionChange={(v) => setData("tag_id", v)}
            >
                <Select.Trigger />
                <Select.List items={tags}>
                    {tags.map((tag: Tags) => (
                        <Select.Option id={tag.id} textValue={tag.title}>
                            {tag.title}
                        </Select.Option>
                    ))}
                </Select.List>
            </Select>
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
