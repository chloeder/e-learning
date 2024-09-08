import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Loader } from "@/components/ui/loader";
import { TextField } from "@/components/ui/text-field";
import { FormEvent } from "react";

interface TagsFormProps {
    data: {
        title: string;
    };
    setData: (key: string, value: string) => void;
    errors: {
        title?: string;
    };
    submit: (e: FormEvent<HTMLFormElement>) => void;
    processing: boolean;
}

export function TagsForm({
    data,
    setData,
    errors,
    submit,
    processing,
}: TagsFormProps) {
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
