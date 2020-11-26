import React from "react";

// Utils
import { compose } from "ramda/src";

// Components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Styles & Assets
import { withStyles } from "@material-ui/core";
import styles from "./styles";

export const SignPage = () => {
  return <Typography>Sign</Typography>;
};

const exportedComponent = compose(withStyles(styles))(SignPage);

export default exportedComponent;
