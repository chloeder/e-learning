import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef, HTMLProps } from "react";

// Parent Home Section
export type HomeSectionProps = HTMLProps<HTMLDivElement>;

const HomeSection = forwardRef<HTMLDivElement, HomeSectionProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <section
                className={cn(
                    "min-h-screen dark:bg-black dark:text-white",
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </section>
        );
    }
);

HomeSection.displayName = "HomeSection";

// Heading Section
export type HomeHeadingProps = HTMLProps<HTMLHeadingElement>;

const HomeHeading = forwardRef<HTMLHeadingElement, HomeHeadingProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <h1
                className={cn("font-bold tracking-tight", className)}
                ref={ref}
                {...props}
            >
                {children}
            </h1>
        );
    }
);

HomeHeading.displayName = "HomeHeading";

// Subheading Section
export type HomeSubheadingProps = HTMLProps<HTMLParagraphElement>;

const HomeSubheading = forwardRef<HTMLParagraphElement, HomeSubheadingProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <p
                className={cn(
                    "text-sm text-zinc-300 tracking-tight",
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </p>
        );
    }
);

HomeSubheading.displayName = "HomeSubheading";

// Carousel Section
export type HomeCarouselSectionProps = HTMLProps<HTMLDivElement>;

const HomeCarouselSection = forwardRef<
    HTMLDivElement,
    HomeCarouselSectionProps
>(({ children, className, ...props }, ref) => {
    return (
        <section
            className={cn(
                "flex flex-col dark:text-white dark:bg-black",
                className
            )}
            ref={ref}
            {...props}
        >
            {children}
        </section>
    );
});

HomeCarouselSection.displayName = "HomeCarouselSection";

// Hero Section
export type HomeHeroSectionProps = HTMLProps<HTMLDivElement>;

const HomeHeroSection = forwardRef<HTMLDivElement, HomeHeroSectionProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <section
                className={cn(
                    "flex flex-col dark:text-white dark:bg-black",
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </section>
        );
    }
);

HomeHeroSection.displayName = "HomeHeroSection";

// Content Section
export type HomeContentSectionProps = HTMLProps<HTMLDivElement>;

const HomeContentSection = forwardRef<HTMLDivElement, HomeContentSectionProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <section
                className={cn(
                    "flex flex-col dark:text-white dark:bg-black",
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </section>
        );
    }
);

HomeContentSection.displayName = "HomeContentSection";

export type HomeReviewSectionProps = HTMLProps<HTMLDivElement>;

const HomeReviewSection = forwardRef<HTMLDivElement, HomeReviewSectionProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <section
                className={cn(
                    "flex flex-col dark:text-white dark:bg-black",
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </section>
        );
    }
);

HomeReviewSection.displayName = "HomeReviewSection";

export type HomeFooterSectionProps = HTMLProps<HTMLDivElement>;

const HomeFooterSection = forwardRef<HTMLDivElement, HomeFooterSectionProps>(
    ({ children, className, ...props }, ref) => {
        {
            return (
                <footer
                    className={cn(
                        "flex flex-col dark:text-white dark:bg-black",
                        className
                    )}
                    ref={ref}
                    {...props}
                >
                    {children}
                </footer>
            );
        }
    }
);

HomeFooterSection.displayName = "HomeFooterSection";

export {
    HomeSection,
    HomeHeading,
    HomeSubheading,
    HomeCarouselSection,
    HomeHeroSection,
    HomeContentSection,
    HomeReviewSection,
    HomeFooterSection,
};
