import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/pro-light-svg-icons";
import IconButton from "@mui/material/IconButton";
import { Paper } from "@mui/material";

export default function PhoneModal() {
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
        aria-label="My AA Insurance account"
        sx={{ mr: 2 }}
      >
        <FontAwesomeIcon icon={faPhone} />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Paper sx={{ p: 2 }}>
          <DialogTitle typography="h5" id="alert-dialog-title">
            {"Doloribus ratione tempora?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus ratione tempora laboriosam autem reprehenderit fugiat,
              eius itaque aspernatur.
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
