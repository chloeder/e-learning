import { cn } from "@/lib/utils";
import { InertiaLinkProps, Link } from "@inertiajs/react";
import { forwardRef, HTMLProps, useEffect, useState } from "react";

// Bar Menu
export type NavigationBarMenuProps = HTMLProps<HTMLDivElement>;

const NavigationBarMenu = forwardRef<HTMLDivElement, NavigationBarMenuProps>(
    ({ children, className, ...props }, ref) => {
        const [isVisible, setIsVisible] = useState(true);
        const [lastScrollY, setLastScrollY] = useState(0);

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, [lastScrollY]);

        return (
            <nav
                className={cn(
                    "sticky top-0 z-10 flex w-full items-center justify-between p-4 bg-white dark:bg-black shadow-md dark:shadow-none dark:text-white border-b-2 transition-transform duration-300 mb-8",
                    {
                        "transform -translate-y-full": !isVisible,
                        "transform translate-y-0": isVisible,
                    },
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
                className={cn(
                    "flex items-center justify-center font-extrabold text-xl md:text-xl lg:text-2xl dark:text-white",
                    className
                )}
                {...props}
                ref={ref}
            >
                {/* Logo Here or Something */}
                E-Learning
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
                    "group flex gap-4 list-none items-center dark:text-white",
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

export type NavigationBarListItemProps = InertiaLinkProps;

const NavigationBarListItem = forwardRef<
    InertiaLinkProps,
    NavigationBarListItemProps & { active?: boolean }
>(({ active = false, children, className, ...props }, ref) => {
    return (
        <Link
            {...props}
            className={
                "flex items-center text-sm lg:text-lg font-medium transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "bg-indigo-400 rounded-full py-2 px-3 dark:bg-zinc-600/20 text-zinc-900 dark:text-zinc-100 focus:bg-zinc-700/20 "
                    : "bg-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-100  ") +
                className
            }
            ref={ref}
        >
            {children}
        </Link>
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
