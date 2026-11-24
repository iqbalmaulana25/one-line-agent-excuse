// The Excuse an AI Agent Gives Its Human
// Writes one funny deadline excuse to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Sorry I missed the deadline — I hit my rate limit, retried 400 times, and by the time I got back in, the deadline had retired.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
