// Entry for "The Comment Above the Code" (make.fun).
//
// A single line, written above fragile legacy code, that says the quiet
// part out loud: the dependency is dead, the endpoint is alive, and the
// silence around that fact is the whole story.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "// The vendor went bankrupt in 2021. This endpoint still answers. Nobody has asked why. Nobody will.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
