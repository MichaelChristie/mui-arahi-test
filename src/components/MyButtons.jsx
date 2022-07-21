import Button from "@mui/material/Button";
import theme from "./ThemeArahi";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function MyButtons() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Typography variant="p"> Hello from My Buttons</Typography>
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

            <Button color="neutral" variant="text">
              Text
            </Button>
            <Button color="neutral" variant="contained">
              Contained
            </Button>
            <Button color="neutral" variant="outlined">
              Outlined
            </Button>
            <Button color="neutral" variant="text">
              Text
            </Button>
            <Button color="neutral" variant="contained">
              Contained
            </Button>
            <Button color="neutral" variant="outlined">
              Outlined
            </Button>
            <Button color="neutral" variant="text">
              Text
            </Button>
            <Button color="neutral" variant="contained">
              Contained
            </Button>
            <Button color="neutral" variant="outlined">
              Outlined
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default MyButtons;
