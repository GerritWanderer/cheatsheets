# Herdr

> prefix remapped to `Ctrl + Space` to match tmux · workspace ≈ tmux session, tab ≈ tmux window

<!-- statusbar: C-Space | herdr | ~/.config/herdr/config.toml | keybindings cheatsheet -->
<!-- footer: same C-Space reflex as tmux — panes and hjkl nav are the only real departures -->
<!-- layout:
  4-column grid.
  row 1: Panes, Tabs, Workspaces & Session, Copy Mode
  row 2: Bonus (herdr-only, wide, full width)
  row 3: Remote (wide, full width)
-->
<!-- source: ~/.config/herdr/config.toml, mapped against src/terminal/terminal.md's tmux config -->

## Panes

| Keys                     | Action                                |
| ------------------------ | ------------------------------------- |
| `Prefix v`               | split pane right (vertical)           |
| `Prefix -`               | split pane down (horizontal) (custom) |
| `Prefix x`               | close pane                            |
| `Prefix z`               | toggle pane zoom (fullscreen)         |
| `Ctrl h` `j` `k` `l`     | move focus between panes              |
| `Ctrl Alt h` `j` `k` `l` | move focus between panes              |
| `Prefix r`               | enter resize mode (custom)            |

## Tabs

| Keys                  | Action                       |
| --------------------- | ---------------------------- |
| `Prefix c`            | new tab                      |
| `Prefix Shift X`      | close tab (custom)           |
| `Prefix Shift T`      | rename tab (custom)          |
| `Prefix 1`…`9`        | go to specific tab           |
| `Alt 1`…`9`           | go to specific tab (custom)  |
| `Prefix n` `Prefix p` | next / previous tab          |
| `Alt Left/Right`      | next / previous tab (custom) |

## Workspaces & Session

| Keys                              | Action                             |
| --------------------------------- | ---------------------------------- |
| `Prefix Shift C`                  | new workspace (custom)             |
| `Prefix Shift K`                  | close workspace (custom)           |
| `Prefix Shift R`                  | rename workspace (custom)          |
| `Prefix Shift N` `Prefix Shift P` | next / previous workspace (custom) |
| `Alt Down/Up`                     | next / previous workspace (custom) |
| `Prefix w`                        | workspace picker (list)            |
| `Prefix q`                        | detach, leave running (custom)     |

## Copy Mode (vi-style)

| Keys       | Action                         |
| ---------- | ------------------------------ |
| `Prefix [` | enter copy mode                |
| `v`        | begin selection (in copy mode) |
| `y`        | copy selection (in copy mode)  |
| `q`        | leave without copying          |

## Bonus (herdr-only, no tmux equivalent)

<!-- layout: wide -->

| Keys                   | Action                         |
| ---------------------- | ------------------------------ |
| `Prefix Shift H/J/K/L` | swap pane with neighbor        |
| `Prefix Tab`           | cycle to next pane             |
| `Prefix Shift Tab`     | cycle to previous pane         |
| `Prefix g`             | goto picker (jump to anything) |
| `Prefix b`             | toggle sidebar                 |
| `Prefix Shift G`       | new git worktree               |
| `Prefix ?`             | show active keybindings        |

## Remote

<!-- layout: wide -->

| Keys                                      | Action                                           |
| ----------------------------------------- | ------------------------------------------------ |
| `herdr --remote <ssh-alias>`              | thin-client attach, uses local keybindings above |
| `herdr` (after `ssh <host>`)              | tmux-style: run herdr on the remote box directly |
| `herdr --remote <alias> --session <name>` | attach a named remote session                    |
| `herdr session list`                      | list local named sessions                        |
