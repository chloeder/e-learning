import { Table } from "@/components/ui/table";
import { Article } from "@/types";
import { Link } from "@inertiajs/react";
import { IconPencilBox } from "justd-icons";
import { DeleteButton } from "./delete-button";

export function ArticleTable({ articles }: { articles: Article[] }) {
    return (
        <Table aria-label="Articles">
            <Table.Header>
                <Table.Column isRowHeader>No</Table.Column>
                <Table.Column>Title</Table.Column>
                <Table.Column>Description</Table.Column>
                <Table.Column>Content</Table.Column>
                <Table.Column className="justify-center">Action</Table.Column>
            </Table.Header>
            <Table.Body>
                {articles.length > 0 ? (
                    articles.map((article) => (
                        <Table.Row key={article.id}>
                            <Table.Cell>{article.id}</Table.Cell>
                            <Table.Cell>{article.title}</Table.Cell>
                            <Table.Cell>{article.description}</Table.Cell>
                            <Table.Cell>{article.content}</Table.Cell>
                            <Table.Cell>
                                <div className="flex gap-2">
                                    <Link
                                        href={route(
                                            "articles.edit",
                                            article.id
                                        )}
                                    >
                                        <IconPencilBox className="text-blue-500 w-5" />
                                    </Link>
                                    <DeleteButton article={articles} />
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
