import GuestLayout from "@/Layouts/GuestLayout";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { TextField } from "@/components/ui/text-field";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
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

            <div className="mb-6">
                <h1 className="font-extrabold mb-2">Register</h1>
                <p className="text-zinc-500 text-sm">
                    Please log in if you have already created an account.
                </p>
            </div>

            <Form validationErrors={errors} onSubmit={submit}>
                <TextField
                    id="name"
                    name="name"
                    label="Name"
                    value={data.name}
                    className="mt-1 block w-full mb-4"
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
                    className="mt-1 block w-full mb-4"
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
                    className="mt-1 block w-full mb-4"
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
                    className="mt-1 block w-full mb-4"
                    autoComplete="new-password"
                    onChange={(e) => setData("password_confirmation", e)}
                    errorMessage={errors.password_confirmation}
                    isRequired
                />

                <div className="flex items-center justify-between mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Already registered?
                    </Link>

                    <Button
                        size="small"
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
