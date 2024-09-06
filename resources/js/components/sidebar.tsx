import {
    IconBook,
    IconBooks,
    IconComputer,
    IconKey,
    IconLogin,
    IconMoon,
    IconOldTv,
    IconRocket,
    IconSun,
} from "justd-icons";

import { Link } from "@inertiajs/react";
import { Avatar } from "./ui/avatar";
import { Menu } from "./ui/menu";
import { Sheet } from "./ui/sheet";

export function Sidebar() {
    return (
        <Sheet>
            <Sheet.Trigger aria-label="Open menu">
                <Avatar initials="A" alt="irsyadadl" />
            </Sheet.Trigger>
            <Sheet.Content closeButton={false}>
                <Sheet.Header className="flex border-b p-4 sticky top-0 bg-overlay flex-row items-center gap-x-3 mb-2">
                    <Avatar initials="A" alt="irsyadadl" />
                    <div>
                        <Sheet.Title>Guest Account</Sheet.Title>
                        <Sheet.Description>Anonymous</Sheet.Description>
                    </div>
                </Sheet.Header>
                <Sheet.Body className="px-0 sm:px-0">
                    <Menu.Primitive className="divide-y [&_.xss3]:p-2">
                        <Menu.Section>
                            <Menu.Item>
                                <IconOldTv />
                                <Link href={route("dashboard")}>Series</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <IconBooks />
                                <Link href={route("dashboard")}>Articles</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <IconBook />
                                <Link href={route("dashboard")}>Buku</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <IconRocket />
                                <Link href={route("dashboard")}>
                                    Membership
                                </Link>
                            </Menu.Item>
                        </Menu.Section>
                        <Menu.Section>
                            <Menu.Item>
                                <IconLogin />{" "}
                                <Link href={route("login")}>Login</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <IconKey />
                                <Link href={route("register")}>Register</Link>
                            </Menu.Item>
                        </Menu.Section>
                        <Menu.Section>
                            <Menu.Item>
                                <IconMoon />
                                Dark
                            </Menu.Item>
                            <Menu.Item>
                                <IconSun />
                                Light
                            </Menu.Item>
                            <Menu.Item>
                                <IconComputer />
                                System
                            </Menu.Item>
                        </Menu.Section>
                    </Menu.Primitive>
                </Sheet.Body>
            </Sheet.Content>
        </Sheet>
    );
}
