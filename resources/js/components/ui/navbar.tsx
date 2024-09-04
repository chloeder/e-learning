import { cn } from "@/lib/utils";
import { forwardRef, HTMLProps } from "react";

// Bar Menu
export type NavigationBarMenuProps = HTMLProps<HTMLDivElement>;

const NavigationBarMenu = forwardRef<HTMLDivElement, NavigationBarMenuProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <nav
                className={cn(
                    "relative z-10 flex w-full items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md dark:shadow-none",
                    className
                )}
                {...props}
                ref={ref}
            >
                {children}
            </nav>
        );
    }
);
NavigationBarMenu.displayName = "NavigationBarMenu";

// Navbar Trigger
export type NavigationBarTriggerProps = HTMLProps<HTMLButtonElement>;

const NavigationBarTrigger = forwardRef<
    HTMLButtonElement,
    NavigationBarTriggerProps
>(({ children, className }, ref) => {
    return (
        <button className={cn("bg-none border-none", className)} ref={ref}>
            {children}
        </button>
    );
});

NavigationBarTrigger.displayName = "NavigationBarTrigger";

// Navbar Logo
export type NavigationBarLogoProps = HTMLProps<HTMLDivElement>;

const NavigationBarLogo = forwardRef<HTMLDivElement, NavigationBarLogoProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                className={cn("flex items-center justify-center", className)}
                {...props}
                ref={ref}
            >
                {/* Logo Here or Something */}
                Logo
            </div>
        );
    }
);

NavigationBarLogo.displayName = "NavigationBarLogo";

// Navbar List
export type NavigationBarListProps = HTMLProps<HTMLUListElement>;

const NavigationBarList = forwardRef<HTMLUListElement, NavigationBarListProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <ul
                className={cn(
                    "group flex gap-4 list-none items-center",
                    className
                )}
                {...props}
                ref={ref}
            >
                {children}
            </ul>
        );
    }
);

NavigationBarList.displayName = "NavigationBarList";

export type NavigationBarListItemProps = HTMLProps<HTMLLIElement>;

const NavigationBarListItem = forwardRef<
    HTMLLIElement,
    NavigationBarListItemProps
>(({ children, className, ...props }, ref) => {
    return (
        <li
            className={cn("group flex list-none items-center", className)}
            {...props}
            ref={ref}
        >
            {children}
        </li>
    );
});

NavigationBarListItem.displayName = "NavigationBarListItem";

export {
    NavigationBarMenu,
    NavigationBarTrigger,
    NavigationBarLogo,
    NavigationBarList,
    NavigationBarListItem,
};
