import { mkdirSync, writeFileSync } from "node:fs";

// The phone's famous last words at 1% battery.
// Deterministic: the exact same bytes on every run.
const LINE =
  "I carried your photos, your secrets, and your 3 a.m. doomscrolls — and you let me die at 1% while still scrolling.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
