import MyData from "../data/tokens.json";
console.log("LightTheme.jsx" + MyData.global.color.base.blue.value);

const lightTheme = {
  palette: {
    mode: "light",
    primary: {
      main: MyData.global.color.base.blue.value,
    },
    secondary: {
      main: MyData.global.color.base.lightgrey.value,
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
      color: MyData.global.color.base.blue.value,
      fontFamily: "Arial",
    },
    h4: {
      fontWeight: 600,
      color: MyData.global.color.base.blue.value,
      fontFamily: "Arial",
    },
    h5: {
      fontWeight: 600,
      fontFamily: "Arial",
    },
  },
};

export default lightTheme;
