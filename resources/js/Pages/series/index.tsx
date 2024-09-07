import { Breadcrumb, Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, Series } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { IconPlus } from "justd-icons";
import { SeriesTable } from "./partials/series-table";

export default function Index({
    auth,
    series,
}: PageProps<{ series: Series[] }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <Breadcrumbs>
                    <Breadcrumb href="#">Home</Breadcrumb>
                    <Breadcrumb>Series</Breadcrumb>
                </Breadcrumbs>
            }
        >
            <Head title="Series" />
            <Card className="m-4">
                <div className="flex justify-end">
                    <Link
                        className={buttonStyles({
                            intent: "primary",
                            size: "extra-small",
                            className: "m-4",
                        })}
                        href={route("series.create")}
                    >
                        <IconPlus className="w-4 h-4" />
                        Crate Series
                    </Link>
                </div>
                <SeriesTable series={series} />
            </Card>
        </AuthenticatedLayout>
    );
}
