import { Breadcrumb, Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, Tags } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { IconPlus } from "justd-icons";
import { TagsTable } from "../tags/partials/tags-table";

export default function Index({ auth, tags }: PageProps<{ tags: Tags[] }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <Breadcrumbs>
                    <Breadcrumb href="#">Home</Breadcrumb>
                    <Breadcrumb>Tags</Breadcrumb>
                </Breadcrumbs>
            }
        >
            <Head title="Tags" />
            <Card className="m-4">
                <div className="flex justify-end">
                    <Link
                        className={buttonStyles({
                            intent: "primary",
                            size: "extra-small",
                            className: "m-4",
                        })}
                        href={route("tags.create")}
                    >
                        <IconPlus className="w-4 h-4" />
                        Create Tags
                    </Link>
                </div>
                <TagsTable tags={tags} />
            </Card>
        </AuthenticatedLayout>
    );
}
