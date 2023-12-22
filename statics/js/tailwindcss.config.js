tailwind.config = {
  theme: {
    extend: {
      colors: {
        gradientStart: "#4190E5",
        gradientEnd: "#3636BF",
        textPagination: "#383EC3",
        bgFooter: "#222222",
        textBlack: "#1A1A1A",
        textGray: "#667085",
        textTime: "#999999",
        bgTag: "#F3F4FC",
        border: "#EAECF0",
      },
    },
    screens: {
      ssm: "414px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      notoSansJP: ["Noto Sans JP", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
};
