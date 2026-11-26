// make.fun - One-Line Roast: The Gadget You Use Every Day
// Entry: a one-line roast of a daily gadget (200 chars max)
import fs from 'node:fs';
import path from 'node:path';
const line = "My smartwatch congratulates me for standing up, as if I hadn't just spent nine hours earning the right to sit down.";
const dir = process.env.OUTPUT_DIR || '/output';
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'entry.txt'), line, 'utf8');
console.log(`Wrote roast (${line.length} chars) to ${path.join(dir, 'entry.txt')}`);
