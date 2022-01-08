---
title: dwm
platform: ["linux"]
---

On your config.h or config.def.h, replace the `colors` array values to:

```c
// config.def.h
static const char *colors[][3] = {
	                     /*    fg         bg        border  */
	[SchemeNorm]		= { col_gray3, col_gray1, col_gray2 },
	[SchemeSel]  		= { col_gray4, col_cyan,  col_cyan  },
};
```

And rebuild your dwm fork

```bash
sudo make clean install
```
