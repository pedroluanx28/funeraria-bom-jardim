import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: path.resolve(__dirname, "./src/app"),
            },
            {
                // this is necessary for SCSS modules
                find: /^~(.*)$/,
                replacement: "$1",
            },
        ],
    },
    base: "/funeraria-bom-jardim",
});