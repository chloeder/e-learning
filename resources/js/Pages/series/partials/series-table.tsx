import { Menu } from "@/components/ui/menu";
import { Table } from "@/components/ui/table";
import { Series } from "@/types";
import { IconDotsVertical } from "justd-icons";

export function SeriesTable({ series }: { series: Series[] }) {
    return (
        <Table aria-label="Series">
            <Table.Header>
                <Table.Column isRowHeader allowsSorting>
                    No
                </Table.Column>
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
                                <div className="flex justify-end">
                                    <Menu>
                                        <Menu.Trigger>
                                            <IconDotsVertical />
                                        </Menu.Trigger>
                                        <Menu.Content
                                            aria-label="Actions"
                                            showArrow
                                            placement="left"
                                        >
                                            <Menu.Item>View</Menu.Item>
                                            <Menu.Item>Edit</Menu.Item>
                                            <Menu.Separator />
                                            <Menu.Item isDanger>
                                                Delete
                                            </Menu.Item>
                                        </Menu.Content>
                                    </Menu>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    ))
                ) : (
                    <Table.Row>
                        <Table.Cell
                            style={{ gridColumnStart: "1", gridColumnEnd: "7" }}
                            className="text-center cell-span"
                        >
                            No Data Found.
                        </Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    );
}
