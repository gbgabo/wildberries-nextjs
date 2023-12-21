/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--aw-color-primary)",
        secondary: "var(--aw-color-secondary)",
        accent: "var(--aw-color-accent)",
        "dark-purple": "var(--wb-dark-purple)",
        //TODO: Tailwind apparently can't handle classes with /xx opacity syntax
        //currently declaring these colors from their direct color value (but also still storing on CustomStyle global scope)
        "darker-purple": "#19002e",
        "acid-green": "var(--wb-acid-green)",
        cherry: "var(--wb-cherry)",
        pink: "var(--wb-pink)",
        "light-purple": "#c79bff",
        grape: "var(--wb-grape)",
        "pastel-purple": "#e7d4ff",
        "muted-purple": "var(--wb-muted-purple)",
      },
    },
  },
  plugins: [],
};
