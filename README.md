# Twin Track

A 15-week daily math and English plan for two Grade 5 students — 45 minutes a day,
7 September to 20 December.

Runs entirely in the browser. No account, no server, no data leaves the device.

## Getting it onto an iPad

1. Open the site in **Safari** (not Chrome — only Safari can install to the home screen on iOS).
2. Tap the **Share** button.
3. Scroll down and tap **Add to Home Screen**.
4. Tap **Add**.

It now launches full-screen from its own icon, and works offline.

Do this on each iPad. The first launch asks for both names; after that, each iPad
remembers which child it belongs to.

## What it covers

**Math** — the full New Jersey Grade 5 sequence (2023 NJSLS), independent of any
outside program:

| Weeks | Focus | Standards |
|---|---|---|
| 1–2 | Place value, decimals to thousandths, powers of 10, rounding | 5.NBT.A |
| 3–4 | Multi-digit multiplication and division | 5.NBT.B.5–6 |
| 5–6 | Decimal operations | 5.NBT.B.7 |
| 7–8 | Adding and subtracting fractions; estimation | 5.NF.A |
| 9–12 | Fractions as division, multiplication, scaling, unit-fraction division | 5.NF.B |
| 13–14 | Expressions, order of operations, patterns, coordinate plane | 5.OA, 5.G.A |
| 15 | Volume, measurement conversion, 2-D hierarchy | 5.M, 5.G.B |

**English** — every day, in parallel: reading (15 original passages alternating
literature and informational), 45 Greek and Latin roots, a grammar point a week,
and a long writing piece each Saturday.

## The daily shape

| Day | Blocks | Math | English |
|---|---|---|---|
| Mon–Fri | Sprint, Math Focus, Spiral Review, Reading, Roots, Sentence Work | 25 min | 20 min |
| Saturday | Sprint, Math Focus, Writing Studio, Roots | 15 min | 30 min |
| Sunday | Mastery Check, Error Fix, Free Reading, Week Review | 25 min | 20 min |

Sunday deliberately introduces nothing new.

## How it works

- **Progress follows the lesson number, not the calendar.** A missed day never
  desyncs the two children, and a hard week can be repeated rather than skipped.
- **Mastery before pace.** Under 80% on the Sunday check means repeat the week.
- **Math problems are generated**, so each child gets different numbers, and
  retries are unlimited.
- **Spiral review and root retrieval** pull from weeks already completed —
  spaced retrieval practice rather than re-reading.
- Answers accept `3/4`, `6/8` and `0.75` as the same value.

## Backup

Progress lives in the browser's local storage, which clearing Safari data will
erase. **Progress → Save a backup file** writes a JSON file; **Restore from a
file** reads it back. Worth doing every few weeks.

## Development

```
node make-icons.js      # regenerate the app icons
```

Everything else is `index.html` — one file, no build step, no dependencies.
Bump `CACHE` in `sw.js` when deploying changes so installed copies pick them up.
