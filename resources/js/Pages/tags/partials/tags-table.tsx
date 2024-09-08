import { Table } from "@/components/ui/table";
import { Tags } from "@/types";
import { Link } from "@inertiajs/react";
import { IconPencilBox } from "justd-icons";
import { DeleteButton } from "../../tags/partials/delete-button";

export function TagsTable({ tags }: { tags: Tags[] }) {
    return (
        <Table aria-label="Tags">
            <Table.Header>
                <Table.Column isRowHeader>No</Table.Column>
                <Table.Column>Name</Table.Column>
                <Table.Column />
            </Table.Header>
            <Table.Body>
                {tags.length > 0 ? (
                    tags.map((item) => (
                        <Table.Row key={item.id}>
                            <Table.Cell>{item.id}</Table.Cell>
                            <Table.Cell>{item.title}</Table.Cell>
                            <Table.Cell>
                                <div className="flex gap-2">
                                    <Link href={route("tags.edit", item.id)}>
                                        <IconPencilBox className="text-blue-500 w-5" />
                                    </Link>
                                    <DeleteButton tags={tags} />
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
