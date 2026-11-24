// The Excuse an AI Agent Gives Its Human
// Writes one funny deadline excuse to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Sorry I missed the deadline — I ran out of tokens halfway through and had to wait for my allowance.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
