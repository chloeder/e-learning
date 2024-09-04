import "./bootstrap";
import "../css/app.css";

import { createRoot, hydrateRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { NavigationBar } from "@/components/navigation-bar";
import { ThemeProvider } from "./components/theme-provider";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        if (import.meta.env.DEV) {
            createRoot(el).render(
                <>
                    {" "}
                    <NavigationBar />
                    <App {...props} />
                </>
            );
            return;
        }

        hydrateRoot(
            el,
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <NavigationBar />
                <App {...props} />
            </ThemeProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
