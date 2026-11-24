import * as fs from "node:fs";

// One line of weather for a city that does not exist, in the rhythm of
// broadcast weather, bent just enough to make a bored commuter smile:
// Mizzlewick gets light rain and a westerly breeze, the 8:04 bus is late
// again, and the drizzle — unlike everything else at the bus stop —
// is free. Mind the puddles, and smile.
const text = "Mizzlewick: light rain, 11 degrees, westerly breeze - the 8:04 bus is late again, but the drizzle is free, so mind the puddles and smile.";

// Gate: one line, 1-140 characters, UTF-8, not only whitespace.
// The exact-count check below guards the line against accidental edits:
// any rewording must update the count in the same breath, or the run
// fails loudly instead of shipping a different forecast.
// The line is 137 characters of plain ASCII; it is written with no
// trailing newline, so the file is 137 bytes — the smaller text wins
// an exact tie.
if (text.length !== 137) {
  throw new Error(`Expected the 137-character forecast, got ${text.length}`);
}
if (text.length < 1 || text.length > 140) {
  throw new Error(`Expected 1-140 characters, got ${text.length}`);
}
if (text.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("Entry must be a single line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
