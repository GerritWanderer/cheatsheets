# Terminal

> tmux prefix remapped to `Ctrl + Space` · Ghostty keymap fully custom (defaults cleared)

<!-- statusbar: C-Space · ⌘ | terminal | tmux.conf + ghostty/config | keybindings cheatsheet -->
<!-- footer: C-Space then a key, or hold ⌘ — that's the whole interface -->
<!-- layout:
  4-column grid.
  row 1: Tmux Panes, Tmux Windows, Tmux Session, Tmux Copy Mode (vi-style)
  row 2: Tmux General (wide, full width)
  row 3: Tmux Layout Scripts (wide, full width)
  row 4: Ghostty General, Ghostty Selection & Movement, Ghostty Window & Splits, Ghostty Pane Navigation
  row 5: Ghostty Font & Misc (wide, full width)
-->
<!-- source: personal tmux config (prefix Ctrl + Space) and personal ghostty config (keybind = clear, full custom keymap) -->

## Tmux Panes

| Keys                   | Action                        |
| ---------------------- | ------------------------------ |
| `Prefix v`             | split pane beside (vertical)  |
| `Prefix h`             | split pane below (horizontal) |
| `Prefix x`             | kill pane                     |
| `Prefix z`             | toggle pane zoom (fullscreen) |
| `Ctrl Alt Arrow`       | move between panes            |
| `Ctrl Alt Shift Arrow` | resize panes                  |

## Tmux Windows

| Keys             | Action                |
| ---------------- | ---------------------- |
| `Prefix c`       | new window            |
| `Prefix k`       | kill window           |
| `Prefix r`       | rename window         |
| `Alt 1`…`9`      | go to specific window |
| `Alt Left/Right` | move between windows  |

## Tmux Session

| Keys                  | Action                  |
| --------------------- | ------------------------ |
| `Prefix C`            | new session             |
| `Prefix K`            | kill session             |
| `Prefix R`            | rename session           |
| `Prefix N` `Prefix P` | next / previous session |
| `Alt Up/Down`         | move between sessions   |
| `Prefix s`            | list sessions           |
| `Prefix d`            | detach from session     |

## Tmux Copy Mode (vi-style)

| Keys       | Action                         |
| ---------- | ------------------------------- |
| `Prefix [` | enter copy mode                |
| `v`        | begin selection (in copy mode) |
| `y`        | copy selection (in copy mode)  |

## Tmux General

<!-- layout: wide -->

| Keys       | Action             |
| ---------- | ------------------- |
| `Prefix q` | reload config      |
| `Prefix :` | command prompt     |
| `Ctrl-^ .` | close mosh session |

## Tmux Layout Scripts (shell functions, not tmux bindings)

<!-- layout: wide -->

| Keys                    | Action                                          |
| ----------------------- | ------------------------------------------------ |
| `tdl <ai> [second_ai]`  | create dev layout with editor, AI, and terminal |
| `tdlm <ai> [second_ai]` | create dev layout per subdirectory              |
| `tsl <count> <command>` | create multi-pane swarm layout                  |

## Ghostty General

| Keys          | Action                    |
| ------------- | -------------------------- |
| `Cmd N`       | new window                |
| `Cmd T`       | new tab                   |
| `Ctrl Tab`    | next tab                  |
| `Ctrl Shift Tab` | previous tab            |
| `Cmd C`       | copy to clipboard          |
| `Cmd V`       | paste from clipboard       |
| `Cmd Shift V` | paste from selection      |
| `Cmd A`       | select all                |
| `Cmd K`       | clear screen               |
| `Cmd Shift ,` | reload config              |

## Ghostty Selection & Movement

| Keys                 | Action                          |
| -------------------- | -------------------------------- |
| `Shift Arrow`        | adjust selection                |
| `Alt Left` `Alt Right` | jump word left / right         |
| `Cmd Left` `Cmd Right` | jump to line start / end       |
| `Cmd Backspace`      | delete to line start            |
| `Cmd Down`           | jump to previous prompt         |

## Ghostty Window & Splits

| Keys                | Action                        |
| ------------------- | ------------------------------- |
| `Cmd W`             | close pane / split             |
| `Cmd Shift W`       | close window                   |
| `Cmd Q`             | quit ghostty                   |
| `Alt Enter`         | toggle fullscreen              |
| `Ctrl Enter`        | new split (right)              |
| `Ctrl Shift Enter`  | new split (down)               |
| `Cmd Enter`         | toggle split zoom              |
| `Shift Enter`       | insert literal newline         |

## Ghostty Pane Navigation

| Keys                                        | Action                                     |
| -------------------------------------------- | -------------------------------------------- |
| `Ctrl H` `Ctrl J` `Ctrl K` `Ctrl L`          | move to split left / down / up / right     |
| `Cmd ]` `Cmd [`                              | next / previous split                      |
| `Ctrl Shift H` `Ctrl Shift J` `Ctrl Shift K` `Ctrl Shift L` | resize split left / down / up / right |

## Ghostty Font & Misc

<!-- layout: wide -->

| Keys                | Action                     |
| ------------------- | ---------------------------- |
| `Cmd -`             | decrease font size          |
| `Cmd +` `Cmd =`     | increase font size          |
| `Cmd F`             | open scrollback in editor   |
| `Shift Insert`      | paste from clipboard        |
| `Ctrl Insert`       | copy to clipboard           |
