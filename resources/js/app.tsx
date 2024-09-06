import "../css/app.css";
import "./bootstrap";

import { ThemeProvider } from "@/components/theme-provider";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot, hydrateRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

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
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <Toaster />

                    <App {...props} />
                </ThemeProvider>
            );
            return;
        }

        hydrateRoot(
            el,
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Toaster />

                <App {...props} />
            </ThemeProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
