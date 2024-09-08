import { SearchButton } from "./search-button";
import { Sidebar } from "./sidebar";
import {
    NavigationBarList,
    NavigationBarListItem,
    NavigationBarLogo,
    NavigationBarMenu,
} from "./ui/navbar";

export function NavigationBar() {
    return (
        <>
            <div className="sticky w-full md:hidden">
                <NavigationBarMenu>
                    <NavigationBarList>
                        <Sidebar />
                    </NavigationBarList>

                    <NavigationBarLogo />
                    <NavigationBarList>
                        <SearchButton />
                    </NavigationBarList>
                </NavigationBarMenu>
            </div>
            <div className="hidden md:inline-flex w-full">
                {" "}
                <NavigationBarMenu>
                    <NavigationBarLogo />
                    <NavigationBarList className="flex items-center gap-8">
                        <NavigationBarListItem
                            href={route("home")}
                            active={route().current("home")}
                            className="text-sm"
                        >
                            Home
                        </NavigationBarListItem>
                        <NavigationBarListItem
                            href={route("series.index")}
                            active={route().current("series.index")}
                            className="text-sm"
                        >
                            Articles
                        </NavigationBarListItem>
                        <NavigationBarListItem
                            href={route("series.index")}
                            active={route().current("series.index")}
                            className="text-sm"
                        >
                            Series
                        </NavigationBarListItem>
                    </NavigationBarList>
                    <NavigationBarList>
                        <Sidebar />
                    </NavigationBarList>
                </NavigationBarMenu>
            </div>
        </>
    );
}
