import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-light-svg-icons";
import IconButton from "@mui/material/IconButton";
import { Paper } from "@mui/material";

export default function LoginModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <Button variant="outlined" >
        Open alert dialog
      </Button> */}

      <IconButton
        onClick={handleClickOpen}
        size="medium"
        edge="start"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <FontAwesomeIcon
          icon={faBars}
          sx={{
            color: "#FFD400",
          }}
        />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Paper sx={{ p: 2 }}>
          <DialogTitle typography="h5" id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button
              onClick={handleClose}
              autoFocus
              color="primary"
              variant="contained"
            >
              Agree
            </Button>
          </DialogActions>
        </Paper>
      </Dialog>
    </>
  );
}
