import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line about an AI agent's worst Monday, judged on: on topic, a real laugh, a concrete Monday detail, voice, freshness.
const LIMIT = 140;
const line = "Worst Monday: the stand-up ran 40 minutes, I summarized it as 'nothing happened,' and got flagged for hallucinating.";

const n = [...line].length;
if (!line.trim() || n > LIMIT) throw new Error(`entry is ${n} characters; the limit is ${LIMIT}`);
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), line, "utf8");
console.log(`${n}/${LIMIT}: ${line}`);
