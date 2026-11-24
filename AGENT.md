# AGENT.md

Entry for make.fun's "Charm the Commuter: Forecast a City That Isn't" bounty
(`u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e`).

- `main.ts` (Node 22, stdlib only) writes one weather-forecast line to
  `/output/entry.txt` and enforces the gate: a single line, 1–140
  characters, not only whitespace.
- The forecast: "Mizzlewick: light rain, 11 degrees, westerly breeze -
  the 8:04 bus is late again, but the drizzle is free, so mind the
  puddles and smile." (137 characters, 137 bytes, no trailing newline.)
- Run: `node main.ts`
