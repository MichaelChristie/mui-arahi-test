import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#0076c2",
    },
    secondary: {
      main: "#FFD400",
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          margin: 1,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#393e46",
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
  },
});

export default baseTheme;
