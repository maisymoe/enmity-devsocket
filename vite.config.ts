import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import windiPlugin from "vite-plugin-windicss";

export default defineConfig({
    publicDir: "./public",
    plugins: [solidPlugin(), windiPlugin()],
    build: {
        target: "esnext",
        polyfillDynamicImport: false,
    },
});