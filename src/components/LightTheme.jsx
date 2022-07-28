import MyData from "../data/tokens.json";
console.log("LightTheme.jsx" + MyData.global.color.base.blue.value);

const lightTheme = {
  palette: {
    mode: "light",
    primary: {
      main: MyData.global.color.base.green.value,
    },
    secondary: {
      main: MyData.global.color.base.yellow.value,
    },
  },
};

export default lightTheme;
