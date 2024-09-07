import { Table } from "@/components/ui/table";
import { DeleteButton } from "@/Pages/articles/partials/delete-button";
import { Series } from "@/types";
import { Link } from "@inertiajs/react";
import { IconPencilBox } from "justd-icons";

export function SeriesTable({ series }: { series: Series[] }) {
    return (
        <Table aria-label="Series">
            <Table.Header>
                <Table.Column isRowHeader>No</Table.Column>
                <Table.Column>Title</Table.Column>
                <Table.Column>Description</Table.Column>
                <Table.Column>Video URL</Table.Column>
                <Table.Column>Slug</Table.Column>
                <Table.Column />
            </Table.Header>
            <Table.Body>
                {series.length > 0 ? (
                    series.map((item) => (
                        <Table.Row key={item.id}>
                            <Table.Cell>{item.id}</Table.Cell>
                            <Table.Cell>{item.title}</Table.Cell>
                            <Table.Cell>{item.description}</Table.Cell>
                            <Table.Cell>{item.tags}</Table.Cell>
                            <Table.Cell>{item.video_url}</Table.Cell>
                            <Table.Cell>{item.slug}</Table.Cell>
                            <Table.Cell>
                                <div className="flex gap-2">
                                    <Link href={route("series.edit", item.id)}>
                                        <IconPencilBox className="text-blue-500 w-5" />
                                    </Link>
                                    <DeleteButton />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    ))
                ) : (
                    <Table.Row className="row-span">
                        <Table.Cell className="text-center cell-span">
                            No Data Found.
                        </Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    );
}
