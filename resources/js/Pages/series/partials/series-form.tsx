import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Loader } from "@/components/ui/loader";
import { Select } from "@/components/ui/select";
import { TextField } from "@/components/ui/text-field";
import { Tags } from "@/types";
import { usePage } from "@inertiajs/react";
import { IconBrandYoutube } from "justd-icons";
import { FormEvent } from "react";

interface SeriesFormProps {
    data: {
        title: string;
        description: string;
        video_url: string;
        tag_id: string;
    };
    setData: (key: string, value: string) => void;
    errors: {
        title?: string;
        description?: string;
        video_url?: string;
        tag_id?: string;
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
}: SeriesFormProps) {
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
            <TextField
                value={data.video_url}
                label="Video URL"
                name="video_url"
                prefix={<IconBrandYoutube />}
                onChange={(v) => setData("video_url", v)}
                className="mb-4"
                errorMessage={errors.video_url}
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
                        <Select.Option
                            key={tag.id}
                            id={tag.id}
                            textValue={tag.title}
                        >
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
