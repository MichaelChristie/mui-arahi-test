import { CssVarsProvider, extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        // affects all Joy components that has `color="primary"` prop.
        brand: {
          primary: "green",
          secondary: "red",
        },
        primary: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          600: "0076c4",
          // 300, 400, ..., 800,
          900: "#78350f",
        },
        secondary: {
          50: "#0076c2",
          100: "#0076c2",
          200: "#0076c2",
          600: "0076c2",
          // 300, 400, ..., 800,
          900: "#0076c2",
        },
      },
    },
  },
  fontFamily: {
    display: "FSLola, var, var(--joy-fontFamily-fallback)",
    body: "courier, var(--joy-fontFamily-fallback)",
  },
});

export default theme;
