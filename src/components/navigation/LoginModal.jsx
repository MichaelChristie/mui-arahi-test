import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircleUser, faTimes } from "@fortawesome/pro-light-svg-icons";
import IconButton from "@mui/material/IconButton";
import { Paper, Box, Typography } from "@mui/material";
import LoginForm from "../LoginForm";

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
      <IconButton
        id="Account login"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClickOpen}
        size="medium"
        edge="start"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <FontAwesomeIcon icon={faCircleUser} />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Paper sx={{ p: 2 }}>
          <DialogTitle typography="h5" id="alert-dialog-title">
            <Box sx={{ display: "flex" }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h5">Login</Typography>
              </Box>
              <Box>
                <IconButton
                  // color="inherit"
                  aria-label="close drawer"
                  onClick={handleClose}
                  sx={{ mt: -1, width: 48, height: 48 }}
                >
                  <FontAwesomeIcon icon={faTimes} fontSize="x-large" />
                </IconButton>
              </Box>
            </Box>
          </DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-description" sx={{ mb: 2 }}>
              Not signed up yet? <a href="/">Register here</a>
            </DialogContentText>
            <LoginForm />
          </DialogContent>
          {/* <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button
              onClick={handleClose}
              autoFocus
              color="primary"
              variant="contained"
            >
              Agree
            </Button>
          </DialogActions> */}
        </Paper>
      </Dialog>
    </>
  );
}
