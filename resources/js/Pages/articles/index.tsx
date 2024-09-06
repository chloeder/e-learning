import { Button, buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu } from "@/components/ui/menu";
import { Table } from "@/components/ui/table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { IconDotsVertical } from "justd-icons";

export default function Index({ auth, articles }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-zinc-800 dark:text-zinc-200 leading-tight">
                    Articles
                </h2>
            }
        >
            <Head title="Articles" />
            <Card className="m-4">
                <Link
                    className={buttonStyles({
                        intent: "primary",
                        size: "extra-small",
                        className: "m-3",
                    })}
                    href={route("articles.create")}
                >
                    Crate Articles
                </Link>
                <Table aria-label="Articles">
                    <Table.Header>
                        <Table.Column isRowHeader>No</Table.Column>
                        <Table.Column>Title</Table.Column>
                        <Table.Column>Description</Table.Column>
                        <Table.Column>Content</Table.Column>
                        <Table.Column>Tags</Table.Column>
                        <Table.Column />
                    </Table.Header>
                    <Table.Body>
                        {articles.map((item) => (
                            <Table.Row key={item.id}>
                                <Table.Cell>{item.id}</Table.Cell>
                                <Table.Cell>{item.title}</Table.Cell>
                                <Table.Cell>{item.description}</Table.Cell>
                                <Table.Cell>{item.content}</Table.Cell>
                                <Table.Cell>{item.tags}</Table.Cell>
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
                        ))}
                    </Table.Body>
                </Table>
            </Card>
        </AuthenticatedLayout>
    );
}
