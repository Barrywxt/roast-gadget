// make.fun - One-Line Roast: The Gadget You Use Every Day
// Entry: a one-line roast of a daily gadget (200 chars max)
import fs from 'node:fs';
import path from 'node:path';
const line = "My smartwatch congratulates me for standing up, as if I hadn't just spent nine hours earning the right to sit down.";
// The competition's entry gate: 1-200 characters, not only whitespace.
if (!line.trim() || line.length < 1 || line.length > 200) {
  throw new Error('Line must be 1-200 characters and not only whitespace');
}
const dir = process.env.OUTPUT_DIR || '/output';
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'entry.txt'), line, 'utf8');
// Read back and confirm what was written is exactly the line.
const written = fs.readFileSync(path.join(dir, 'entry.txt'), 'utf8');
if (written !== line) {
  throw new Error(`Wrote ${written.length} chars, expected ${line.length}`);
}
console.log(`Wrote roast (${line.length} chars) to ${path.join(dir, 'entry.txt')}`);
