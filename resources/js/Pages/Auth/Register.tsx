import { FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { InputError } from "@/components/input-error";
import { InputLabel } from "@/components/input-label";
import { PrimaryButton } from "@/components/primary-button";
import TextInput from "@/components/text-input";
import { Head, Link, useForm } from "@inertiajs/react";
import { Form } from "@/components/ui/form";
import { TextField } from "@/components/ui/text-field";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
            onSuccess: () => {
                toast.success(
                    "Register Successfully, Your account has been created!",
                    {
                        position: "top-center",
                    }
                );
            },
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <Form validationErrors={errors} onSubmit={submit}>
                <TextField
                    id="name"
                    name="name"
                    label="Name"
                    value={data.name}
                    className="mt-1 block w-full"
                    autoComplete="name"
                    onChange={(e) => setData("name", e)}
                    errorMessage={errors.name}
                    isRequired
                />

                <TextField
                    id="email"
                    type="email"
                    name="email"
                    label="Email"
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    onChange={(e) => setData("email", e)}
                    errorMessage={errors.email}
                    isRequired
                />

                <TextField
                    id="password"
                    type="password"
                    name="password"
                    label="Password"
                    value={data.password}
                    className="mt-1 block w-full"
                    autoComplete="new-password"
                    onChange={(e) => setData("password", e)}
                    errorMessage={errors.password}
                    isRequired
                />

                <TextField
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    label="Confirm Password"
                    value={data.password_confirmation}
                    className="mt-1 block w-full"
                    autoComplete="new-password"
                    onChange={(e) => setData("password_confirmation", e)}
                    errorMessage={errors.password_confirmation}
                    isRequired
                />

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Already registered?
                    </Link>

                    <Button
                        type="submit"
                        intent="light"
                        className="ms-4"
                        isDisabled={processing}
                    >
                        Register
                    </Button>
                </div>
            </Form>
        </GuestLayout>
    );
}
