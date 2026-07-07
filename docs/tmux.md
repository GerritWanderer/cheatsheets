Tmux #

The prefix key is Ctrl + Space (Ctrl + B also works). You can change these bindings in ~/.config/tmux/tmux.conf.
Panes #
Hotkey Function
Prefix + v Split pane beside (vertical)
Prefix + h Split pane below (horizontal)
Prefix + x Kill pane
Prefix + z Toggle pane zoom (fullscreen)
Ctrl + Alt + Arrows Move between panes
Ctrl + Alt + Shift + Arrows Resize panes
Windows #
Hotkey Function
Prefix + c New window
Prefix + k Kill window
Prefix + r Rename window
Alt + 1-9 Go to specific window
Alt + Arrow Left/Right Move between windows
Sessions #
Hotkey Function
Prefix + C New session
Prefix + K Kill session
Prefix + R Rename session
Prefix + N Next session
Prefix + P Previous session
Alt + Arrow Up/Down Move between sessions
Prefix + s List sessions
Prefix + d Detach from session
Copy mode (vi-style) #
Hotkey Function
Prefix + [ Enter copy mode
v Begin selection (in copy mode)
y Copy selection (in copy mode)
General #
Hotkey Function
Prefix + q Reload config
Prefix + : Command prompt
Tmux layout functions #

These functions must be run inside a Tmux session.
Command Function
tdl <ai> [<second_ai>] Create dev layout with editor, AI, and terminal
tdlm <ai> [<second_ai>] Create dev layout per subdirectory
tsl <count> <command> Create multi-pane swarm layout
