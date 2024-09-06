import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { TagField, TagItemProps } from "@/components/ui/tag-field";
import { TextField } from "@/components/ui/text-field";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, FormEvent } from "react";
import { ListData } from "react-stately";

interface ArticleFormProps {
    data: {
        title: string;
        description: string;
        content: string;
    };
    handleChange: (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    selectedItems: ListData<TagItemProps>;
}

export function ArticleForm({
    data,
    handleChange,
    handleSubmit,
    selectedItems,
}: ArticleFormProps) {
    return (
        <Form onSubmit={handleSubmit}>
            <TextField
                id="title"
                label="Title"
                value={data.title}
                onChange={setData}
                isRequired
                className="mb-2 text-white"
            />
            <TextField
                id="description"
                label="Description"
                value={data.description}
                onChange={() => handleChange}
                isRequired
                className="mb-2"
            />
            <Textarea
                id="content"
                label="Content"
                value={data.content}
                onChange={() => handleChange}
                isRequired
                className="mb-2"
            />
            <TagField
                intent="secondary"
                appearance="cool"
                className="min-w-sm mb-4"
                max={3}
                label="Add tag"
                list={selectedItems}
            />
            <Button type="submit" size="small">
                Submit
            </Button>
        </Form>
    );
}
