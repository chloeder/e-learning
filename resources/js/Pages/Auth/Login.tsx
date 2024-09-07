import GuestLayout from "@/Layouts/GuestLayout";
import { Checkbox } from "@/components/checkbox";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { TextField } from "@/components/ui/text-field";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { toast } from "sonner";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
            onSuccess: () => {
                toast.success("Login successfully!", {
                    position: "top-center",
                });
            },
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <div className="mb-6">
                <h1 className="font-extrabold mb-2">Login</h1>
                <p className="text-zinc-500 text-sm">
                    Welcome back, please enter your credentials to continue.
                </p>
            </div>
            <Form validationErrors={errors} onSubmit={submit}>
                <div>
                    <TextField
                        label="Email"
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(v) => setData("email", v)}
                        errorMessage={errors.email}
                    />
                </div>

                <div className="mt-4">
                    <TextField
                        label="Password"
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(v) => setData("password", v)}
                        errorMessage={errors.password}
                    />
                </div>

                <div className="flex justify-between my-6">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(v) => setData("remember", v as any)}
                        />
                        <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
                            Remember me
                        </span>
                    </label>

                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Forgot your password?
                        </Link>
                    )}
                </div>

                <div className="flex items-center justify-between mt-4">
                    <Link
                        href={route("register")}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Register
                    </Link>

                    <Button
                        size="small"
                        type="submit"
                        intent="light"
                        className="ms-4"
                        isDisabled={processing}
                    >
                        Log in
                    </Button>
                </div>
            </Form>
        </GuestLayout>
    );
}
