module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      text: ["Proza Libre", "sans-serif"],
      title: ["Cormorant Garamond", "serif"],
      quotes: ["Moon Dance", "cursive"],
    },
    colors: {
      mycolor: "#EBB444",
      backcolor: "#EBB444",
      s_black: "#171a22",
      s_counter: "#9ea1a7",
      s_skin: "#a87b52",
      s_abs_line: "#e6e6e6",
      s_pera: "#7a7e88",
      s_btn_bg: "#f3f6f9",
      s_proj: "#a7a9ae",
      "footer-color": "#25292f",
      foot_btn: "#575858",
      "foot-text": "#cacaca",
      "serv-white": "#fefefe",
      "serv-black": "#31363d",
      white: "#ffffff",
      black: "#000000",
      gray: {
        300: "#D1D5DB",
        900: "#111827",
      },
      transparent: "transparent",
      current: "currentColor",
      quote: "#303339",
      "quote-span": "#7f8691",
    },
    extend: {
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      zIndex: {
        9999: "9999",
        99999: "99999",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
