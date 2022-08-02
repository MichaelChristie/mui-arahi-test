import MyData from "../data/tokens.json";
console.log("DarkTheme.jsx" + MyData.global.color.base.blue.value);

const darkTheme = {
  palette: {
    mode: "dark",
    primary: {
      main: MyData.global.color.base.blue25.value,
    },
    secondary: {
      main: MyData.global.color.base.black10.value,
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    h1: {
      fontWeight: 600,
      fontFamily: MyData.global.fontFamily.primaryHeading.value,
    },
    h2: {
      fontWeight: 600,
      fontFamily: MyData.global.fontFamily.primaryHeading.value,
    },
    h3: {
      fontWeight: 600,
      fontFamily: "Arial",
    },
    h4: {
      fontWeight: 600,
      fontFamily: "Arial",
    },
    h5: {
      fontWeight: 600,
      fontFamily: "Arial",
    },
  },
};

export default darkTheme;
