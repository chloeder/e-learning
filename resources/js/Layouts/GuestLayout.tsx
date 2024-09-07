import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <>
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-zinc-100 dark:bg-zinc-900">
                <Link href="/">
                    <h1 className="font-extrabold text-3xl">ELEARNING</h1>
                </Link>
                <div className="w-full sm:max-w-md mt-6 p-10 bg-white dark:bg-zinc-800 shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
        </>
    );
}
