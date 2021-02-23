import { AppBar, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import CreateNewUser from '../components/createNewUser';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
  },
  typography: {
    padding: '10px 0',
    fontSize: '25px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

const User = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.appBar}>
        <Typography className={classes.typography}>Create New User</Typography>
      </AppBar>
      <CreateNewUser />
    </>
  );
};

export default User;
