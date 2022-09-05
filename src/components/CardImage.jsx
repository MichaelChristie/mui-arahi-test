import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faPhone,
  faArrowRight,
} from "@fortawesome/pro-light-svg-icons";

export default function CardImage(props) {
  //   console.log(props);
  return (
    <Card
      sx={{
        display: "flex",
        bgcolor: "background.paper",
        flexDirection: "column",
        // borderRadius: 2,
        height: "100%",
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={props.image}
        alt={props.title}
        sx={{
          order: "0",
          flex: "0 1 auto",
          alignSelf: "stretch",
        }}
      />

      <CardContent
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          backgroundColor: "",
          p: 3,
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            order: "0",
            flex: "1 1 auto",
            alignSelf: "stretch",
          }}
        >
          {props.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            order: "0",
            flex: "1 1 auto",
            alignSelf: "stretch",
          }}
        >
          {props.description}
        </Typography>
      </CardContent>
      <Box
        sx={{
          order: "0",
          flex: "1 1 auto",
          alignSelf: "stretch",
        }}
      ></Box>
      <CardActions sx={{ backgroundColor: "", alignContent: "flex-end", p: 3 }}>
        <Button
          size="small"
          color="primary"
          startIcon={<FontAwesomeIcon icon={faArrowRight} />}
        >
          More info{" "}
        </Button>
        {/* <Button size="small" color="neutral">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}
