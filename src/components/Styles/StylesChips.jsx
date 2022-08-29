import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function StylesChips() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Audi" variant="outlined" onClick={handleClick} />
      <Chip label="Alfa Romeo" variant="outlined" onClick={handleClick} />
      <Chip
        label="BMW"
        variant="filled"
        color="secondary"
        onClick={handleClick}
      />
      <Chip label="Ford" variant="outlined" onClick={handleClick} />
      <Chip label="Volkswagon" variant="outlined" onClick={handleClick} />
      <Chip label="Mini" variant="outlined" onClick={handleClick} />
      {/* <Chip label="Skoda" variant="outlined" onClick={handleClick} /> */}
    </Stack>
  );
}
