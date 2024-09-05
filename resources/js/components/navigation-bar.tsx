import { SearchButton } from "./search-button";
import { Sidebar } from "./sidebar";
import {
    NavigationBarList,
    NavigationBarLogo,
    NavigationBarMenu,
} from "./ui/navbar";

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
