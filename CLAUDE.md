# CLAUDE.md

Static cheatsheet site, served by GitHub Pages from `docs/` on `main`. No build step.

## Rules

- **Do not redesign.** All sheets share `docs/assets/sheet.css` and `docs/assets/sheet.js`. A new or updated sheet changes only its `window.SHEET` data. Change the shared CSS/JS only when explicitly asked, and then for every sheet at once.
- One file per tool: `docs/<tool>.html`, a copy of an existing sheet with new `SHEET` data. Add a card for it to `docs/index.html` and a row to `README.md`.
- Build sheets from the real config files on this machine. Note the source in a comment above `window.SHEET`. Do not invent bindings; if a default cannot be verified, leave it out.

## SHEET data format

Documented at the top of `docs/assets/sheet.js`. In short:

- Item: `[label, keys, mode]`. In `keys`, a space separates steps pressed in sequence and `+` joins keys pressed together. Use `Plus` / `Space` for those literal keys, and `Prefix` for a prefix key (set `prefix` on the sheet). Write a family of keys as one cap: `Ctrl+h/j/k/l`.
- `mode`: omit for sequences, `"or"` for alternatives, `"cmd"` for literal commands or syntax.
- Labels: lowercase, concise, no trailing period. End with `(custom)` for personal, non-default bindings.
- Write a letter with Shift in uppercase (`Ctrl+Shift+T`), other letters lowercase.
- Keep each sheet to about one screen; trim rare bindings rather than shrinking text.
