import { Link } from "@inertiajs/react";
import {
    BookCheck,
    LibraryBig,
    Menu,
    RocketIcon,
    TvMinimalPlay,
} from "lucide-react";
import { NavigationBarList, NavigationBarListItem } from "./ui/navbar";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";

export function Sidebar() {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
            <SheetContent side="left" className="dark:text-white">
                <SheetHeader className="flex flex-col items-start justify-start">
                    <SheetTitle className="mb-5">Logo</SheetTitle>
                    <SheetDescription className="text-start">
                        <NavigationBarList className="flex-col gap-6 items-start">
                            <NavigationBarListItem className="font-semibold text-black">
                                <TvMinimalPlay className="mr-5" />
                                <Link href={route("dashboard")}>Series</Link>
                            </NavigationBarListItem>
                            <NavigationBarListItem className="font-semibold text-black">
                                <BookCheck className="mr-5" />
                                <Link href={route("dashboard")}>Artikel</Link>
                            </NavigationBarListItem>
                            <NavigationBarListItem className="font-semibold text-black">
                                <LibraryBig className="mr-5" />
                                <Link href={route("dashboard")}>Buku</Link>
                            </NavigationBarListItem>
                            <NavigationBarListItem className="font-semibold text-black">
                                <RocketIcon className="mr-5" />
                                <Link href={route("dashboard")}>
                                    Membership
                                </Link>
                            </NavigationBarListItem>
                            <NavigationBarListItem className="font-semibold text-black">
                                <a href={route("login")}>Login</a>
                            </NavigationBarListItem>
                            <NavigationBarListItem className="font-semibold text-black">
                                <a href={route("register")}>Register</a>
                            </NavigationBarListItem>
                        </NavigationBarList>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
