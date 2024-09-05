import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
            animation: {
                "spin-slow": "spin 3s linear infinite",
                "scroll-up": "scroll-up 10s linear infinite",
            },
            keyframes: {
                "scroll-up": {
                    "0%": {
                        transform: "translateY(0)",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                    },
                    "100%": {
                        transform: "translateY(-50%)",
                        bosxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                    },
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            colors: {},
        },
    },

    plugins: [forms, require("tailwindcss-animate")],
};
