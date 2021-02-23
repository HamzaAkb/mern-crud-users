import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  appbar: {
    backgroundColor: 'white',
    color: 'black',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  typography: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: '20px',
  },
  textDecoration: {
    textDecoration: 'none',
  },
});

const Appbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.typography}>User List</Typography>
        <Link to={{ pathname: '/user' }} className={classes.textDecoration}>
          <Button
            variant='outlined'
            color='primary'
            className={classes.typography}
          >
            Create New User
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
