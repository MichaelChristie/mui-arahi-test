import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ClaimMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
        sx={{
          fontFamily: "FSLola",
          fontWeight: 600,
          letterSpacing: -0.25,
          fontSize: 22,
          textTransform: "none",
          display: { xs: "none", lg: "inline-flex" },
          transition: "all 0.5s ease",
        }}
      >
        Claim
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Start a claim</MenuItem>
        <MenuItem onClick={handleClose}>Claim FAQs</MenuItem>
        <MenuItem onClick={handleClose}>Learn more</MenuItem>
      </Menu>
    </>
  );
}
