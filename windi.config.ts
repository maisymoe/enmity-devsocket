import { defineConfig } from "windicss/helpers";

// @ts-expect-error
import scrollbarPlugin from "@windicss/plugin-scrollbar";

export default defineConfig({
    theme: {
        extend: {
            transitionProperty: {
                "filter": "filter"
            },
        },
        fontFamily: {
            sans: ["Whitney"],
            header: ["Whitney"],
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",

            // Dark mode
            "primary": "#36393f",
            "secondary": "#2f3136",
            "tertiary": "#202225",

            // Text
            "text": "#dcddde",
            "muted": "#a3a6aa",

            // Cards
            "card": "#20222599",

            // Accents
            "accent": "#5865f2",
            "accent-dimmed": "#4a54c1",
            "green": "#57F287",
            "red": "#ED4245",
        },
    },
    variants: {
        scrollbar: ["rounded"]
    },
    plugins: [
        scrollbarPlugin,
    ]
})