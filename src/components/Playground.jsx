import { Button } from "@mui/material";
import * as React from "react";

// import jssTemplate from "jss-plugin-template";

// const jss = create({
//   plugins: [jssTemplate(), ...jssPreset().plugins],
// });

// const useStyles = makeStyles({
//   root: `
//     background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
//     border-radius: 3px;
//     font-size: 16px;
//     border: 0;
//     color: white;
//     height: 48px;
//     padding: 0 30px;
//     box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
//   `,
// });

// function Child() {
//   const classes = useStyles();
//   return (
//     <button type="button" className={classes.root}>
//       String templates
//     </button>
//   );
// }

export default function Playground() {
  return (
    <>
      <Button variant="contained" color="primary">
        hello just me
      </Button>

      {/* <StylesProvider jss={jss}> */}
      {/* <Child /> */}
      {/* </StylesProvider> */}
    </>
  );
}
