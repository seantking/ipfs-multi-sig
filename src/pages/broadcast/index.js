import React, { useState } from "react";

// Utils
import { compose } from "ramda/src";

// Components
import {
  Grid,
  Button,
  TextField,
  Typography,
  Tooltip,
  Divider,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import { Send, Globe } from "react-feather";
import Loading from "./../../layout/loading";

// Styles & Assets
import { withStyles } from "@material-ui/core";
import styles from "./../styles";

// Mock data
import { mockData } from "./../../mock.js";

const formikInitialValues = {
  chain: mockData.chain,
  mnemonic: mockData.mnemonicMultiSig,
  signedHashOne: mockData.signedIpfsHash,
  signedHashTwo: mockData.signedIpfsHashTwo,
  unsignedIpfsHash: mockData.unsignedIpfsHash,
};

export const BroadcastPage = ({ classes }) => {
  const [hashIsReady, setHashIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onFormikSubmit = async (values) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsLoading(false);
    setHashIsReady(true);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (hashIsReady) {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.content}
      >
        <Globe size={85} className={classes.hashLogo} />
        <Grid item={8}>
          <Typography className={classes.ipfsHash} variant="h3">
            Success
          </Typography>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Send size={55} className={classes.logo} />
      <Grid item={8}>
        <Grid item xs={12} className={classes.form}>
          <Formik onSubmit={onFormikSubmit} initialValues={formikInitialValues}>
            {({ values, handleSubmit, isSubmitting }) => (
              <>
                <Typography className={classes.formTitle}>
                  Broadcast transaction
                </Typography>
                <Form>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="left"
                    spacing={3}
                  >
                    <Tooltip
                      title={`
                       The chain name e.g. Gaia
                    `}
                      placement="right-start"
                    >
                      <Grid item xs={12}>
                        <TextField
                          className={classes.textField}
                          id="chain"
                          label="Chain"
                          variant="outlined"
                          value={values.chain}
                        />
                      </Grid>
                    </Tooltip>

                    <Grid item xs={5}>
                      <Tooltip
                        title={`
                      The unsigned transfer 
                    `}
                        placement="right-start"
                      >
                        <TextField
                          className={classes.textField}
                          id="unsignedIpfsHash"
                          label="Unsigned IPFS hash link"
                          variant="outlined"
                          value={values.unsignedIpfsHash}
                        />
                      </Tooltip>
                    </Grid>
                    <Tooltip
                      title={`
                       A link to a signed json file
                    `}
                      placement="right-start"
                    >
                      <Grid item xs={12}>
                        <TextField
                          className={classes.textField}
                          id="signedHashOne"
                          label="Signed IPFS hash link"
                          variant="outlined"
                          value={values.signedHashOne}
                        />
                      </Grid>
                    </Tooltip>

                    <Grid item xs={12}>
                      <Tooltip
                        title={`
                       A link to a signed json file
                    `}
                        placement="right-start"
                      >
                        <TextField
                          className={classes.textField}
                          id="signedHashTwo"
                          label="Signed IPFS hash link"
                          variant="outlined"
                          value={values.signedHashTwo}
                        />
                      </Tooltip>
                    </Grid>
                    <Divider className={classes.divider} variant="middle" />
                    <Tooltip
                      title={`
                       Your  unique mnemonic 
                    `}
                      placement="right-start"
                    >
                      <Grid item xs={12}>
                        <TextField
                          className={classes.textField}
                          id="mnemonic"
                          label="Mnemonic"
                          variant="outlined"
                          value={values.mnemonic}
                        />
                      </Grid>
                    </Tooltip>
                    <Grid item xs={12}>
                      <Grid container direction="row" justify="flex-end">
                        <Grid item className={classes.buttonContainer}>
                          <Button
                            variant="contained"
                            color="secondary"
                            type="submit"
                            size="large"
                          >
                            Broadcast transaction
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Form>
              </>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Grid>
  );
};

const exportedComponent = compose(withStyles(styles))(BroadcastPage);

export default exportedComponent;
