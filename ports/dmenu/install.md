---
title: dmenu
---

On your config.h or config.def.h, replace the `colors` array values to:

```c
// config.def.h
static const char *colors[SchemeLast][2] = {
							 /*    fg         bg    */
	[SchemeNorm]			= { "#c79bff", "#240041" },
	[SchemeSel] 			= { "#00ffb7", "#900048" },
	[SchemeOut] 			= { "#000000", "#00ffff" },
};
```

And rebuild your dwm fork

```bash
sudo make clean install
```
