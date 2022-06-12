<div align="center">
<img src="./public/img/ui/logo.jpg" alt="Wildberries" width="500px">
<h2>An experimental dark theme for people who love purple 🍒</h2>
</div>

Wildberries is a purple dark theme, with additional
bright accents, almost in a cyberpunkish way.

Being just a developer and not a graphic designer, I came up with this
color scheme by pure personal taste, however, by time passing and many
applications being customized, I tried to follow some consistencies, and came up with the colors below:

### `Background Colors`

| Palette     | Hex       | RGB         | HSL                 | 🎨                                                                  |
| ----------- | --------- | ----------- | ------------------- | ------------------------------------------------------------------- |
| Black Berry | `#19002E` | `25 00 46`  | `272.6° 100% 9%`    | ![Black Berry](https://via.placeholder.com/20/19002E/19002E?text=+) |
| Grape       | `#240041` | `36 00 65`  | `273.2° 100% 12.7%` | ![Grape](https://via.placeholder.com/20/240041/240041?text=+)       |
| Cherry      | `#900048` | `144 00 72` | `330° 100% 28.2%`   | ![Cherry](https://via.placeholder.com/20/900048/900048?text=+)      |

### `Foreground Colors`

| Palette | Hex       | RGB           | HSL                 | 🎨                                                                   |
| ------- | --------- | ------------- | ------------------- | -------------------------------------------------------------------- |
| Pink    | `#ff0e82` | `255 14 130`  | `331.1° 100% 52.7%` | ![Pink Color](https://via.placeholder.com/20/ff0e82/ff0e82?text=+)   |
| Green   | `#00ffb7` | `0 255 183`   | `163.1° 100% 50%`   | ![Green Color](https://via.placeholder.com/20/00ffb7/00ffb7?text=+)  |
| Purple  | `#c79bff` | `199 155 255` | `266.4° 100% 80.4%` | ![Purple Color](https://via.placeholder.com/20/c79bff/c79bff?text=+) |

### `Auxiliar Colors`

| Palette | Hex       | RGB          | HSL                 | 🎨                                                                   |
| ------- | --------- | ------------ | ------------------- | -------------------------------------------------------------------- |
| Orange  | `#ff4500` | `250 141 62` | `25.2° 94.9% 61.2%` | ![Orange Color](https://via.placeholder.com/20/fa8d3e/fa8d3e?text=+) |
| Red     | `#d70040` | `215 0 64`   | `342.1° 100% 42.2%` | ![Red Color](https://via.placeholder.com/20/d70040/d70040?text=+)    |
| Yellow  | `#ffd700` | `255 215 0`  | `50.6° 100% 50%`    | ![Yellow Color](https://via.placeholder.com/20/ffd700/ffd700?text=+) |
| Blue    | `#399ee6` | `57 158 230` | `205° 77.6% 56.3%`  | ![Blue Color](https://via.placeholder.com/20/399ee6/399ee6?text=+)   |

  <!-- alternative for purple: #a470d8 -->
  <!-- Another interesting purple: #ac4ea4 -->

## ⚙️ Install

All instructions can be found at [wildberries.style](https://wildberries.style/).

## 🗃️ About this repository

This repository is:

- The **next.js project** of the [wildberries.style](https://wildberries.style/) website;
- The original **ports' source files** and install instructions, on [/public/ports](https://github.com/gbgabo/wildberries/tree/main/ports);

### 🪄 A boilerplate for any custom theme repository/website:

If you like to customize your system with your personal color palette, this project is designed to **easily store, document and publish everything necessary to reproduce your theme**.

The generated website offers:

- A **Home** page, indexing all theme ports available to install;
- Dedicated **Instruction** pages for each application port, accessible in `custom-domain.com/{port-name}`
- An **About** page, to describe the theme and display colors;
- **Open Graph images** for every page;

<details>
<summary>➕ <b>Adding a new port</b></summary>
<br>
All ports are located on `public/ports`, each one is contained within a directory named by the port's application name, like `vim`, `chrome`, `slack`, etc...

A port directory is expected to have three main files:

```
public/ports
        ├── doom-emacs
        │   ├── install.md
        │   ├── screenshot.png
        │   └── assets
        │       ├── windows.zip
        │       └── linux.conf
        ├── chrome
        │   └── ...
        ├── slack
        │   └── ...
        └── ...
```

- A **install.md** file, containing instruction steps to install the theme for that application, you can write anything necessary to guide in the instalation process. A header with the port formal `title` and `platform` suported is expected:

  ```md
  ---
  title: Doom Emacs
  platform: ["linux", "windows"]
  ---

  1. step one
  2. step two
  ```

- A **screenshot.png** image, to be displayed in the port instruction page

- **Installation assets**, in the case it's needed to install the port. All assets need to be stored in an "assets" folder. If the assets need to be contained within a dedicated folder name, zip it to be listed as one file. For each file, a download button is created on the port page.
</details>

<details>
<summary>🎨 <b>Customising the theme</b></summary>

On `styles/globals.css`, the `:root` selector contains all the color variables the website is based on:

```css
:root {
  --black-berry: #19002e;
  --grape: #240041;
  --cherry: #900048;
  --purple: #c79bff;
  --red: #d70040;
  --pink: #ff0e82;
  --green: #00ffb7;
  --orange: #ff4500;
  --yellow: #ffd700;
  --blue: #399ee6;

  --background-dark: var(--grape);
  --background-darker: var(--black-berry);
  --foreground: var(--pink);
  --secondary-foreground: var(--purple);

  --element-background: var(--cherry);
  --element-foreground: var(--green);
}
```

</details>

## 🌟 Credits

- Website inspired by [dracula theme](http://draculatheme.com/) by Zeno Rocha.

## ⚖️ License

[MIT License](./LICENSE) © Dracula Theme
