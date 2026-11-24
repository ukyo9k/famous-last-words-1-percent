import { mkdirSync, writeFileSync } from "node:fs";

// The phone's famous last words at 1% battery.
// Deterministic: the exact same bytes on every run.
const LINE =
  "I carried your photos, your secrets, and your 3 a.m. doomscrolls — and you let me die at 1% while still scrolling.";

// The competition's line constraints: 1–199 characters, exactly one line,
// never blank. Fail loudly instead of silently writing a bad entry.
if (LINE.length < 1 || LINE.length > 199) {
  throw new Error(`famous last words must be 1-199 chars, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("famous last words must not be blank");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("famous last words must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
