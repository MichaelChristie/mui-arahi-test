import MyData from "../data/tokens.json";
console.log("DarkTheme.jsx" + MyData.global.color.base.blue.value);

const darkTheme = {
  palette: {
    mode: "dark",
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
      // color: MyData.global.color.base.blue.value,
      // fontSize: global.Typography.H1.value.fontSize.value,
      fontFamily: MyData.global.fontFamily.primaryHeading.value,
    },
    h2: {
      fontWeight: 600,
      // color: MyData.global.color.base.blue.value,
      // fontSize: global.Typography.H1.value.fontSize.value,
      fontFamily: MyData.global.fontFamily.primaryHeading.value,
    },
    h3: {
      fontWeight: 600,
      // color: MyData.global.color.base.blue.value,
      // fontSize: global.Typography.H1.value.fontSize.value,
      // fontFamily: MyData.global.fontFamily.secondaryHeading.value,
      fontFamily: "Arial",
    },
    h4: {
      fontWeight: 600,
      // color: MyData.global.color.base.blue.value,
      // fontSize: global.Typography.H1.value.fontSize.value,
      // fontFamily: MyData.global.fontFamily.secondaryHeading.value,
      fontFamily: "Arial",
    },
    h5: {
      fontWeight: 600,
      // color: MyData.global.color.base.blue.value,
      // fontSize: global.Typography.H1.value.fontSize.value,
      // fontFamily: MyData.global.fontFamily.secondaryHeading.value,
      fontFamily: "Arial",
    },
  },
};

export default darkTheme;
