# Tmux Keybindings

> Personal config — prefix remapped to `Ctrl + Space`.

<!-- statusbar: C-Space | tmux | ~/.tmux.conf | keybindings cheatsheet -->
<!-- footer: C-Space then a key — that's the whole interface -->
<!-- layout:
  4-column grid.
  row 1: Panes, Windows, Session, Copy Mode (vi-style)
  row 2: General (wide, full width)
  row 3: Layout Scripts (wide, full width)
-->
<!-- source: personal tmux config, prefix is Ctrl + Space -->

## Panes

| Keys | Action |
|---|---|
| `Prefix v` | split pane beside (vertical) |
| `Prefix h` | split pane below (horizontal) |
| `Prefix x` | kill pane |
| `Prefix z` | toggle pane zoom (fullscreen) |
| `Ctrl Alt Arrow` | move between panes |
| `Ctrl Alt Shift Arrow` | resize panes |

## Windows

| Keys | Action |
|---|---|
| `Prefix c` | new window |
| `Prefix k` | kill window |
| `Prefix r` | rename window |
| `Alt 1`…`9` | go to specific window |
| `Alt Left/Right` | move between windows |

## Session

| Keys | Action |
|---|---|
| `Prefix C` | new session |
| `Prefix K` | kill session |
| `Prefix R` | rename session |
| `Prefix N` `Prefix P` | next / previous session |
| `Alt Up/Down` | move between sessions |
| `Prefix s` | list sessions |
| `Prefix d` | detach from session |

## Copy Mode (vi-style)

| Keys | Action |
|---|---|
| `Prefix [` | enter copy mode |
| `v` | begin selection (in copy mode) |
| `y` | copy selection (in copy mode) |

## General

| Keys | Action |
|---|---|
| `Prefix q` | reload config |
| `Prefix :` | command prompt |
| `Ctrl-^ .` | close mosh session |

## Layout Scripts (shell functions, not tmux bindings)

| Keys | Action |
|---|---|
| `tdl <ai> [second_ai]` | create dev layout with editor, AI, and terminal |
| `tdlm <ai> [second_ai]` | create dev layout per subdirectory |
| `tsl <count> <command>` | create multi-pane swarm layout |
