import { Search } from "lucide-react";
import { Sidebar } from "./Sidebar";
import {
    NavigationBarList,
    NavigationBarLogo,
    NavigationBarMenu,
} from "./ui/navbar";
import { SearchButton } from "./search-button";

export function NavigationBar() {
    return (
        <NavigationBarMenu>
            <NavigationBarList>
                <Sidebar />
            </NavigationBarList>
            <NavigationBarLogo />
            <NavigationBarList>
                <SearchButton />
            </NavigationBarList>
        </NavigationBarMenu>
    );
}
