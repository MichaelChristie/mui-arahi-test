import Button from "@mui/material/Button";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme,
  experimental_extendTheme,
} from "@mui/material/styles";
import theme from "./ThemeArahi";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
// import { ThemeProvider } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function MyButtons() {
  return (
    <div className="App">
      {/* <CssVarsProvider> */}
      <CssVarsProvider>
        <Typography> Hello from My Buttons</Typography>
        <FontAwesomeIcon icon={faCoffee} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(80px, 1fr))",
              gap: 1,
              mb: 2,
            }}
          >
            <Button color="primary" variant="text">
              Text
            </Button>
            <Button color="primary" variant="contained">
              Contained
            </Button>
            <Button color="primary" variant="outlined">
              Outlined
            </Button>
            <Button color="primary" variant="text">
              Text
            </Button>
            <Button color="primary" variant="contained">
              Contained
            </Button>
            <Button color="primary" variant="outlined">
              Outlined
            </Button>
            <Button color="primary" variant="text">
              Text
            </Button>
            <Button color="primary" variant="contained">
              Contained
            </Button>
            <Button color="primary" variant="outlined">
              Outlined
            </Button>

            <Button color="secondary" variant="text">
              Text
            </Button>
            <Button color="secondary" variant="contained">
              Contained
            </Button>
            <Button color="secondary" variant="outlined">
              Outlined
            </Button>
            <Button color="secondary" variant="text">
              Text
            </Button>
            <Button color="secondary" variant="contained">
              Contained
            </Button>
            <Button color="secondary" variant="outlined">
              Outlined
            </Button>
            <Button color="secondary" variant="text">
              Text
            </Button>
            <Button color="secondary" variant="contained">
              Contained
            </Button>
            <Button color="secondary" variant="outlined">
              Outlined
            </Button>

            <Button color="secondary" variant="text">
              Text
            </Button>
            <Button color="secondary" variant="contained">
              Contained
            </Button>
            <Button color="secondary" variant="outlined">
              Outlined
            </Button>
            <Button color="secondary" variant="text">
              Text
            </Button>
            <Button color="secondary" variant="contained">
              Contained
            </Button>
            <Button color="secondary" variant="outlined">
              Outlined
            </Button>
            <Button color="secondary" variant="text">
              Text
            </Button>
            <Button color="secondary" variant="contained">
              Contained
            </Button>
            <Button color="secondary" variant="outlined">
              Outlined
            </Button>
          </Box>
        </Box>
      </CssVarsProvider>
    </div>
  );
}

export default MyButtons;
