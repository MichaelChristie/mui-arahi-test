import * as React from "react";
import QuoteWrapper from "../components/QuoteWrapper";
import Typography from "@mui/material/Typography";
import { Button, Box, Grid } from "@mui/material";
import QuestionContainer from "../components/QuestionContainer";
import VertCentre from "../components/VertCentre";
import { Link } from "react-router-dom";

function QuotePage2() {
  const [flag, setFlag] = React.useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };
  return (
    <>
      <QuoteWrapper progress={50}>
        <Typography variant="h1">Page 2</Typography>
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
                      size="large"
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
                      size="large"
                      color={flag ? "grey" : "secondary"}
                    >
                      No
                    </Button>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ display: "flex", marginTop: 12 }}>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box>
                  <Button variant="contained" color="primary" size="large">
                    Continue
                  </Button>
                  <Link to="/quote">Page 1</Link>
                </Box>
              </Box>
            </QuestionContainer>
          </VertCentre>
        </Box>
      </QuoteWrapper>
    </>
  );
}

export default QuotePage2;
