import React from "react";

// Utils
import { compose } from "ramda/src";

// Components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Styles & Assets
import { withStyles } from "@material-ui/core";
import styles from "./styles";

export const TransactionPage = () => {
  return <Typography>Transaction</Typography>;
};

const exportedComponent = compose(withStyles(styles))(TransactionPage);

export default exportedComponent;
