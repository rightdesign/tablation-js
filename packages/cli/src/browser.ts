import { spawn } from "node:child_process";

/** Best-effort only — the caller should already have printed the URL, since this can silently fail (headless environments, unsupported platforms). */
export function openBrowser(url: string): void {
  const command =
    process.platform === "darwin"
      ? "open"
      : process.platform === "win32"
        ? "start"
        : "xdg-open";
  try {
    spawn(command, [url], { stdio: "ignore", detached: true }).unref();
  } catch {
    // Best-effort only.
  }
}
