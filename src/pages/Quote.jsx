import * as React from "react";
import QuoteTemplate from "../components/QuoteTemplate";
import Typography from "@mui/material/Typography";
import { Button, Box, Grid } from "@mui/material";
import QuestionContainer from "../components/QuestionContainer";
import VertCentre from "../components/VertCentre";

function Quote1({ children, ...props }) {
  const [flag, setFlag] = React.useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };
  return (
    <>
      <QuoteTemplate>
        <Typography variant="h1">Find your Car</Typography>
        <Box
          sx={{
            height: "60vh",
            // background: "#FF0000"
          }}
        >
          <VertCentre>
            <QuestionContainer>
              <Typography variant="h5">
                Did you buy this car on Finance?
              </Typography>
              <Typography paragraph></Typography>

              <Box sx={{ marginTop: 2 }}>
                <Grid container spacing={2} align="center" direction="row">
                  <Grid item xs={6}>
                    <Button
                      onClick={handleClick}
                      variant="contained"
                      fullWidth
                      color={flag ? "grey" : "secondary"}
                    >
                      Yes
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      onClick={handleClick}
                      variant="contained"
                      fullWidth
                      color={flag ? "grey" : "secondary"}
                    >
                      No
                    </Button>
                  </Grid>
                </Grid>
              </Box>

              {/* <Box sx={{ display: "flex", marginTop: 2 }}>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box>
                  <Button variant="contained" color="primary">
                    Continue
                  </Button>
                </Box>
              </Box> */}
            </QuestionContainer>
          </VertCentre>
        </Box>
      </QuoteTemplate>
    </>
  );
}

export default Quote1;
