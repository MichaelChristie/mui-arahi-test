import MyData from "../data/tokens.json";
console.log("DarkTheme.jsx" + MyData.global.color.base.blue.value);

const darkTheme = {
  palette: {
    mode: "dark",
    primary: {
      main: "#FFD400",
    },
    secondary: {
      main: "#f50057",
    },
  },
};

export default darkTheme;
