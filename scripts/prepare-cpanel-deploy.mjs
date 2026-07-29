import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const buildDir = path.join(rootDir, ".next");
const standaloneDir = path.join(buildDir, "standalone");
const staticDir = path.join(buildDir, "static");
const publicDir = path.join(rootDir, "public");
const deployDir = path.join(rootDir, "deploy", "cpanel");

async function main() {
  await rm(deployDir, { recursive: true, force: true });
  await mkdir(path.join(deployDir, ".next"), { recursive: true });

  await cp(standaloneDir, deployDir, { recursive: true });
  await cp(staticDir, path.join(deployDir, ".next", "static"), {
    recursive: true,
  });
  await cp(publicDir, path.join(deployDir, "public"), { recursive: true });
  await cp(
    path.join(rootDir, ".env.production.example"),
    path.join(deployDir, ".env.production.example")
  );

  // Standalone output may include local env files; never ship those.
  await rm(path.join(deployDir, ".env"), { force: true });
  await rm(path.join(deployDir, ".env.local"), { force: true });
  await rm(path.join(deployDir, ".env.production"), { force: true });

  const readme = `KOLI Infotech cPanel deploy package

Contents:
- server.js (startup file)
- .next/static
- public
- minimal node_modules bundle from Next standalone output

Deploy steps:
1. Upload all files from this folder to your Node.js app root in cPanel.
2. Set startup file to server.js in Node.js Selector.
3. Add environment variables from .env.production.example.
4. Run npm install (if prompted by cPanel).
5. Restart the application from Node.js Selector.
`;

  await writeFile(path.join(deployDir, "README.txt"), readme, "utf8");
  console.log("cPanel bundle prepared at:", deployDir);
}

main().catch((error) => {
  console.error("Failed to prepare cPanel bundle:", error);
  process.exit(1);
});
