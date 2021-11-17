import reactRefresh from "@vitejs/plugin-react-refresh";
import { join } from "path";
import { ConfigEnv, UserConfig } from "vite";

const srcRoot = join(__dirname, "src");

export default ({ command }: ConfigEnv): UserConfig => {
  // DEV
  if (command === "serve") {
    return {
      base: "/",
      plugins: [reactRefresh()],
      alias: {
        "/@": srcRoot,
      },
      build: {
        outDir: join(srcRoot, "/out"),
        emptyOutDir: true,
        rollupOptions: {},
      },
      server: {
        port: process.env.PORT === undefined ? 3000 : +process.env.PORT,
      },
      optimizeDeps: {
        exclude: ["path"],
      },
    };
  }
  // PROD

  return {
    base: `${__dirname}/src/out/`,
    plugins: [reactRefresh()],
    alias: {
      "/@": srcRoot,
    },
    build: {
      outDir: join(srcRoot, "/out"),
      emptyOutDir: true,
      rollupOptions: {},
    },
    server: {
      port: process.env.PORT === undefined ? 3000 : +process.env.PORT,
    },
    optimizeDeps: {
      exclude: ["path"],
    },
  };
};
