// import { Link } from "@inertiajs/react";
// import {
//     BookCheck,
//     LibraryBig,
//     Menu,
//     RocketIcon,
//     TvMinimalPlay,
// } from "lucide-react";
// import { NavigationBarList, NavigationBarListItem } from "./ui/navbar";
// import {
//     Sheet,
//     SheetContent,
//     SheetDescription,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
// } from "./ui/sheet";

// export function Sidebar() {
//     return (
//         <Sheet>
//             <SheetTrigger>
//                 <Menu />
//             </SheetTrigger>
//             <SheetContent side="left" className="dark:text-white">
//                 <SheetHeader className="flex flex-col items-start justify-start">
//                     <SheetTitle className="mb-5">Logo</SheetTitle>
//                     <SheetDescription className="text-start">
//                         <NavigationBarList className="flex-col gap-6 items-start">
//                             <NavigationBarListItem className="font-semibold text-black">
//                                 <TvMinimalPlay className="mr-5" />
//                                 <Link href={route("dashboard")}>Series</Link>
//                             </NavigationBarListItem>
//                             <NavigationBarListItem className="font-semibold text-black">
//                                 <BookCheck className="mr-5" />
//                                 <Link href={route("dashboard")}>Artikel</Link>
//                             </NavigationBarListItem>
//                             <NavigationBarListItem className="font-semibold text-black">
//                                 <LibraryBig className="mr-5" />
//                                 <Link href={route("dashboard")}>Buku</Link>
//                             </NavigationBarListItem>
//                             <NavigationBarListItem className="font-semibold text-black">
//                                 <RocketIcon className="mr-5" />
//                                 <Link href={route("dashboard")}>
//                                     Membership
//                                 </Link>
//                             </NavigationBarListItem>
//                             <NavigationBarListItem className="font-semibold text-black">
//                                 <a href={route("login")}>Login</a>
//                             </NavigationBarListItem>
//                             <NavigationBarListItem className="font-semibold text-black">
//                                 <a href={route("register")}>Register</a>
//                             </NavigationBarListItem>
//                         </NavigationBarList>
//                     </SheetDescription>
//                 </SheetHeader>
//             </SheetContent>
//         </Sheet>
//     );
// }

import { Description } from "@headlessui/react";
import {
    IconBrandGithub,
    IconPerson,
    IconBook,
    IconBrandCopilot,
    IconChart,
    IconStar,
    IconCodeBrackets,
    IconBuilding,
    IconGlobe,
    IconHeart,
    IconFilter,
    IconGear,
    IconBookOpen,
    IconPeople,
    IconMessages,
    IconLogout,
    IconOldTv,
    IconBooks,
    IconRocket,
} from "justd-icons";
import { useState } from "react";

import { Avatar } from "./ui/avatar";
import { Sheet } from "./ui/sheet";
import { Menu } from "./ui/menu";
import { Link } from "@inertiajs/react";

export default function Sidebar() {
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
                            <Menu.Item>
                                <IconStar /> Your stars
                            </Menu.Item>
                            <Menu.Item>
                                <IconCodeBrackets /> Your gists
                            </Menu.Item>
                            <Menu.Item>
                                <IconBuilding /> Your organizations
                            </Menu.Item>
                            <Menu.Item>
                                <IconGlobe /> Your enterprises
                            </Menu.Item>
                            <Menu.Item>
                                <IconHeart />
                                Your sponsors
                            </Menu.Item>
                        </Menu.Section>
                        <Menu.Section>
                            <Menu.Item>
                                <IconFilter /> Feature preview
                            </Menu.Item>
                            <Menu.Item>
                                <IconGear />
                                Settings
                            </Menu.Item>
                        </Menu.Section>
                        <Menu.Section>
                            <Menu.Item>
                                <IconLogout /> Sign out
                            </Menu.Item>
                        </Menu.Section>
                    </Menu.Primitive>
                </Sheet.Body>
            </Sheet.Content>
        </Sheet>
    );
}
