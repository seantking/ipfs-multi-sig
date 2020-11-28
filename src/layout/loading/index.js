import { Grid, CircularProgress } from "@material-ui/core";
// Styles & Assets
import { withStyles } from "@material-ui/core";
import styles from "./styles";
// Utils
import { compose } from "ramda/src";

const Loading = ({ classes }) => (
  <Grid
    container
    className={classes.content}
    direction="column"
    justify="center"
    alignItems="center"
  >
    <Grid item={8}>
      <CircularProgress size={75} className={classes.loading} />
    </Grid>
  </Grid>
);

const exportedComponent = compose(withStyles(styles))(Loading);

export default exportedComponent;
