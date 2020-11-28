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
import { Framer, Globe } from "react-feather";

// Styles & Assets
import { withStyles } from "@material-ui/core";
import styles from "./../styles";
import Loading from "./../../layout/loading";

// Mock data
import { mockData } from "./../../mock.js";

const formikInitialValues = {
  chain: mockData.chain,
  mnemonic: mockData.mnemonicMultiSig,
  tokenName: mockData.tokenName,
  senderAddress: mockData.multiSigAddress,
  receiverAddress: mockData.receiverAddress,
  amount: mockData.transactionAmount,
  unsignedIpfsHash: mockData.unsignedIpfsHash,
};

export const TransactionPage = ({ classes }) => {
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
          <Tooltip
            title={`
                       Click to copy
                    `}
            placement="bottom-center"
          >
            <Button>
              <Typography
                onClick={() => {
                  navigator.clipboard.writeText(mockData.signedIpfsHash);
                }}
                className={classes.ipfsHash}
              >
                {mockData.signedIpfsHash}
              </Typography>
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Framer size={55} className={classes.logo} />
      <Grid item={8}>
        <Grid item xs={12} className={classes.form}>
          <Formik onSubmit={onFormikSubmit} initialValues={formikInitialValues}>
            {({ values, handleSubmit, isSubmitting, handleChange }) => (
              <>
                <Typography className={classes.formTitle}>
                  Create a new multi signature transaction
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
                          onChange={handleChange}
                        />
                      </Grid>
                    </Tooltip>

                    <Grid item xs={5}>
                      <Tooltip
                        title={`
                       The token you want to transfer e.g. ETH
                    `}
                        placement="right-start"
                      >
                        <TextField
                          className={classes.textField}
                          id="tokenName"
                          label="Token"
                          variant="outlined"
                          value={values.tokenName}
                          onChange={handleChange}
                        />
                      </Tooltip>
                    </Grid>
                    <Tooltip
                      title={`
                       The amount of tokens you would like to transfer
                    `}
                      placement="right-start"
                    >
                      <Grid item xs={12}>
                        <TextField
                          className={classes.textField}
                          id="amount"
                          label="Amount"
                          variant="outlined"
                          value={values.amount}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Tooltip>

                    <Grid item xs={12}>
                      <Tooltip
                        title={`
                       The multisignature address you want to send tokens from
                    `}
                        placement="right-start"
                      >
                        <TextField
                          className={classes.textField}
                          id="senderAddress"
                          label="Sender Address"
                          variant="outlined"
                          value={values.senderAddress}
                          onChange={handleChange}
                        />
                      </Tooltip>
                    </Grid>
                    <Grid item xs={12}>
                      <Tooltip
                        title={`
                       The address that will recieve the tokens
                    `}
                        placement="right-start"
                      >
                        <TextField
                          className={classes.textField}
                          id="reciverAddress"
                          label="Reciever Address"
                          variant="outlined"
                          value={values.receiverAddress}
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
                          onChange={handleChange}
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
                            Create Transaction
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

const exportedComponent = compose(withStyles(styles))(TransactionPage);

export default exportedComponent;
