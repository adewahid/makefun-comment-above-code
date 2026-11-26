// Entry for "The Comment Above the Code" (make.fun).
//
// A single line, written above fragile legacy code, that says the quiet
// part out loud: the dependency is dead, the endpoint is alive, and the
// silence around that fact is the whole story.
import { mkdirSync, writeFileSync } from "node:fs";

// The line below is the comment every engineer wishes they could leave
// above the haunted endpoint nobody dares to touch: honest, funny, and
// written by someone who knows that asking why means inheriting it.
const line =
  "// The vendor went bankrupt in 2021. This endpoint still answers. Nobody has asked why. Nobody will.";

// Guard: the entry must be a real line of text, 1–200 characters and not
// only whitespace. A blank or absurdly long comment would be worse than the
// haunted endpoint itself, so fail loudly instead of shipping silence.
if (line.trim().length === 0 || line.length > 200) {
  throw new Error(
    `Invalid entry line: expected 1–200 non-whitespace characters, got ${line.length} characters.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
