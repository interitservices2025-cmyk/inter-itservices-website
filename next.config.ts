import fs from "fs";
import type { NextConfig } from "next";

// Fix Windows lowercase drive letter ("d:\...") in VS Code / Antigravity terminals
// which causes Next.js 16 Turbopack to panic with "Next.js package not found".
const canonicalRoot = fs.realpathSync.native(process.cwd());
if (process.cwd() !== canonicalRoot) {
  try {
    process.chdir(canonicalRoot);
  } catch {
    // Ignore if chdir is not permitted in the current environment
  }
}

const nextConfig: NextConfig = {
  outputFileTracingRoot: canonicalRoot,
  turbopack: {
    root: canonicalRoot,
  },
};

export default nextConfig;

