export const theme1 = `{
    "palette": {
      "primary": {
        "main": "#357a38"
      },
      "secondary": {
        "main": "#00a152"
      }
    },
    "components": {
      "MuiButton": {
        "defaultProps": {
          "disableRipple": true,
          "size": "small",
          "sx": {
            "color": "#393e46"
          }
        }
      },
      "MuiPaper": {
        "defaultProps": {
          "elevation": 10
        },
        "styleOverrides": {
          "root": {
            "background": "#222831"
          }
        }
      }
    }
  }`;

export const theme2 = {
  palette: {
    primary: {
      main: "#1769aa",
    },
    secondary: {
      main: "#00b0ff",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        size: "large",
        sx: {
          borderRadius: "10px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "gray",
        },
      },
      defaultProps: {
        elevation: 20,
      },
    },
  },
};
