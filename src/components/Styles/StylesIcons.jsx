import * as React from "react";
import { Box, Button, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faPhone,
  faArrowRight,
  faArrowLeft,
  faHome,
  faKey,
  faLamp,
  faEllipsis,
  faExclamationCircle,
  faScissors,
  faBook,
} from "@fortawesome/pro-light-svg-icons";
import {
  faCar,
  faCloudDownloadAlt,
  faCircleCheck,
} from "@fortawesome/pro-solid-svg-icons";

export default function StylesIcons() {
  return (
    <>
      <IconButton>
        <FontAwesomeIcon
          color="neutral"
          icon={faExclamationCircle}
          fontSize="large"
        />
      </IconButton>
      <IconButton>
        <FontAwesomeIcon color="neutral" icon={faArrowLeft} fontSize="large" />
      </IconButton>
      <IconButton>
        <FontAwesomeIcon color="neutral" icon={faEllipsis} fontSize="large" />
      </IconButton>
      <IconButton>
        <FontAwesomeIcon
          color="neutral"
          icon={faCircleCheck}
          fontSize="large"
        />
      </IconButton>
      <IconButton>
        <FontAwesomeIcon color="neutral" icon={faPhone} fontSize="large" />
      </IconButton>
      <IconButton>
        <FontAwesomeIcon
          color="neutral"
          icon={faExclamationCircle}
          fontSize="large"
        />
      </IconButton>
      <IconButton>
        <FontAwesomeIcon color="neutral" icon={faCircleUser} fontSize="large" />
      </IconButton>
      <IconButton>
        <FontAwesomeIcon color="neutral" icon={faKey} fontSize="large" />
      </IconButton>
      <IconButton>
        <FontAwesomeIcon color="neutral" icon={faArrowRight} fontSize="large" />
      </IconButton>
      <IconButton>
        <FontAwesomeIcon
          color="neutral"
          icon={faCloudDownloadAlt}
          fontSize="large"
        />
      </IconButton>
      <IconButton>
        <FontAwesomeIcon color="neutral" icon={faBook} fontSize="large" />
      </IconButton>
      <IconButton>
        <FontAwesomeIcon color="neutral" icon={faBars} fontSize="large" />
      </IconButton>
      <IconButton>
        <FontAwesomeIcon color="neutral" icon={faScissors} fontSize="large" />
      </IconButton>
    </>
  );
}
