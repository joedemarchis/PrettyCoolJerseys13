import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "jersey-showcase";
const githubPagesBase = repositoryName.endsWith(".github.io") ? "/" : `/${repositoryName}/`;

export default defineConfig({
  base: isGitHubPages ? githubPagesBase : "/",
  plugins: [
    tanstackRouter({ target: "react" }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
