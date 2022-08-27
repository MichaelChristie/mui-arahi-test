import * as React from "react";
import { Button, Grid, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";
import RegoPlateLeft from "../images/regoPlateLeft.svg";
import RegoPlateRight from "../images/regoPlateRight.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/pro-light-svg-icons";
import RegoField from "./RegoField";
import { Alert } from "@mui/material";
import RegoCarResults from "./RegoCarResults";
import Playground from "./Playground";
import HeroMarketingMessage19 from "./HeroMarketingMessage19";

export default function RegoLookup() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      {/* <Playground /> */}

      <Grid container direction="row">
        <Grid item container>
          <Grid item xs={9}>
            <RegoField />
          </Grid>
          <Grid item xs={3} sx={{ pl: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleChange}
              fullWidth
              sx={{ height: "100%" }}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} fontSize="large" />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Playground />
      <Collapse in={checked} collapsedSize={0}>
        <RegoCarResults buttonAction={`<Button> edff<Button />`} />
        <Alert severity="info">
          <Typography variant="h6">Not your Car?</Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ornare tortor ultrices, aliquet turpis nec, dignissim sem. Nam
          venenatis gravida lacus sit amet fermentum.{" "}
          <a href="/">Curabitur ut erat</a> elit.
        </Alert>
      </Collapse>
    </>
  );
}
