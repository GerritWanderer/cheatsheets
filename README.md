# Cheatsheets

Shortcut and command cheatsheets for the tools I use every day, built from my own config files.

Live at **https://gerritwanderer.github.io/cheatsheets/**

| Sheet | Built from |
| --- | --- |
| [Herdr](docs/herdr.html) | `~/.config/herdr/config.toml` + herdr defaults |
| [Ghostty](docs/ghostty.html) | `dotfiles/.config/ghostty/keybindings` (macOS) + `~/.config/ghostty/config` (Omarchy) |
| [Obsidian](docs/obsidian.html) | Obsidian defaults + vault `hotkeys.json` |
| [Basic Memory](docs/basic-memory.html) | Claude Code plugin, `memory-*` skills, `bm --help` |
| [macOS Navigation](docs/macos.html) | macOS and Zen Browser defaults + my workspace bindings |

## How it works

No build step. GitHub Pages serves `docs/` from `main`.

- `docs/assets/sheet.css` holds the shared design (theme tokens, light and dark).
- `docs/assets/sheet.js` renders a whole page from a `window.SHEET` object.
- Each `docs/<tool>.html` only defines `window.SHEET`. See the comment at the top of `sheet.js` for the format.

To add a sheet, copy an existing one, replace the `SHEET` data, and add a card to `docs/index.html`.
