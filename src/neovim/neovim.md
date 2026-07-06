# Neovim Keybindings

> Editing, cut & paste, search & replace, buffers, LSP and screen movement. `#` stands for a count prefix.

<!-- statusbar: NORMAL | nvim | ~/.config/nvim | keybindings cheatsheet -->
<!-- footer: NORMAL → INSERT → VISUAL → COMMAND-LINE — Esc always brings you home -->
<!-- layout:
  4-column grid.
  row 1: Editing, Cut & Paste, Search & Replace, Screen Movement
  row 2: Buffers (wide, full width)
  row 3: LSP (wide, full width)
  row 4: Snacks History (wide, full width)
  row 5: Miscellaneous commands (wide, full width)
-->
<!-- source material: extracted from the four screenshots in this folder -->

## Editing (replace, change, undo)

| Keys     | Action                                                        |
| -------- | ------------------------------------------------------------- |
| `r`      | replace single character                                      |
| `R`      | enter replace mode                                            |
| `J`      | join line below to current one with one space in between them |
| `gJ`     | join line below to current one with no spaces                 |
| `cc`     | change entire line                                            |
| `C`      | change to the end of line                                     |
| `ciw`    | change inner word                                             |
| `s`      | delete character and substitute text                          |
| `S`      | delete line and substitute text                               |
| `u`      | undo                                                          |
| `Ctrl r` | redo                                                          |
| `.`      | repeat last command                                           |

## Cut & Paste (yank, put, delete)

| Keys     | Action                                  |
| -------- | --------------------------------------- |
| `yy` `Y` | yank single line                        |
| `yw`     | yank from cursor to start of next word  |
| `y#m`    | yank # of lines with m movement (hjkl…) |
| `"ayy`   | yank current line into named buffer a   |
| `p`      | put (paste) after the cursor            |
| `P`      | put (paste) before the cursor           |
| `"aP`    | put text from buffer a before cursor    |
| `dd`     | delete current line                     |
| `#dm`    | delete # of lines with movement (hjkl)  |
| `D`      | delete to end of line                   |
| `dw`     | delete until word                       |
| `x`      | delete character at cursor              |
| `X`      | delete backwards from cursor            |

## Search & Replace

| Keys             | Action                                              |
| ---------------- | --------------------------------------------------- |
| `/pattern`       | search for pattern in current buffer                |
| `?pattern`       | search for pattern backwards in current buffer      |
| `:s/old/new`     | replace next old with new                           |
| `:s/old/new/g`   | replace instances of old with new in current line   |
| `:%s/old/new/g`  | replace all old with new throughout file            |
| `:%s/old/new/gc` | replace all old with new in file with confirmations |
| `<leader>/`      | search for pattern backwards in current buffer      |
| `<leader>s/`     | Grep History                                        |
| `<leader>sb`     | Grep current buffer lines                           |
| `<leader>sB`     | Grep current buffer lines                           |

## Buffers (<leader>b?)

| Keys         | Action                    |
| ------------ | ------------------------- |
| `S-h`        | Switch to left buffer     |
| `S-l`        | Switch to right buffer    |
| `<leader>bd` | Delete buffer             |
| `<leader>``  | Change to previous buffer |
| `<leader>bj` | Pick buffer               |
| `<leader>bp` | Pin buffer                |
| `<leader>.`  | Buffer Snacks             |
| `<leader>be` | Buffer Explorer           |

## LSP (g?)

| Keys         | Action                 |
| ------------ | ---------------------- |
| `gd`         | Goto Definition        |
| `gr`         | References             |
| `gI`         | Goto Implementation    |
| `gy`         | Goto T[y]pe Definition |
| `K`          | Hover                  |
| `gK`         | Signature Help         |
| `ca`         | Code Action            |
| `cr`         | Code Rename            |
| `[[`         | Next Reference         |
| `]]`         | Previous Reference     |
| `<leader>ss` | Workspace Symbols      |
| `<leadersS>` | Document Symbolos      |

## Snacks History (<leader>s)

| Keys         | Action               |
| ------------ | -------------------- |
| `<leader>fr` | Recent Files         |
| `<leader>fb` | buffers              |
| `<leader>n`  | Notification History |
| `<leader>s"` | Register History     |
| `<leader>s/` | Grep History         |
| `<leader>:`  | Command History      |

## Screen Movement (scroll & reposition)

| Keys  | Action                          |
| ----- | ------------------------------- |
| `C-d` | move forward half a screen      |
| `C-u` | move backward half a screen     |
| `zz`  | cursor line to center of screen |
| `zt`  | cursor line to top of screen    |
| `zb`  | cursor line to bottom of screen |

## Miscellaneous commands

| Keys       | Action                |
| ---------- | --------------------- |
| ZZ         | Close Window          |
| <leader>uz | Toggle Zen            |
| <leader>.  | Toggle Scratch Buffer |
