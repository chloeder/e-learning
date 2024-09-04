import {
    Calculator,
    Calendar,
    CreditCard,
    Search,
    Settings,
    Smile,
    User,
} from "lucide-react";
import { useState } from "react";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "./ui/command";

export function SearchButton() {
    const [open, setOpen] = useState<boolean>(false);

    const onHandleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <>
            <button onClick={onHandleOpen}>
                <Search />
            </button>
            <CommandDialog
                open={open}
                onOpenChange={() => {
                    setOpen((previousState) => !previousState);
                }}
            >
                <CommandInput
                    placeholder="Type a command or search..."
                    className="border-0 focus:ring-0"
                />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem>
                            <Calendar className="mr-2 h-4 w-4" />
                            <span>Calendar</span>
                        </CommandItem>
                        <CommandItem>
                            <Smile className="mr-2 h-4 w-4" />
                            <span>Search Emoji</span>
                        </CommandItem>
                        <CommandItem disabled>
                            <Calculator className="mr-2 h-4 w-4" />
                            <span>Calculator</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                        <CommandItem>
                            <User className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                        </CommandItem>
                        <CommandItem>
                            <CreditCard className="mr-2 h-4 w-4" />
                            <span>Billing</span>
                        </CommandItem>
                        <CommandItem>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}
