import {
  Container,
  Grid,
  makeStyles,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Button,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  margin: {
    marginTop: '15px',
  },
  container: {
    marginTop: '100px',
  },
});

const CreateNewUser = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='sm' className={classes.container}>
      <form>
        <TextField
          className={classes.margin}
          fullWidth
          label='Name'
          variant='outlined'
          required
        />
        <Grid container>
          <Grid item xs='6'>
            <FormControl
              className={classes.margin}
              style={{ width: '95%' }}
              variant='outlined'
            >
              <InputLabel id='demo'>Gender</InputLabel>
              <Select label='Gender' labelId='demo'>
                <MenuItem value={'male'}>Male</MenuItem>
                <MenuItem value={'female'}>Female</MenuItem>
                <MenuItem value={'other'}>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs='6'>
            <TextField
              variant='outlined'
              fullWidth={true}
              label='Age'
              inputProps={{ maxLength: 2 }}
              className={classes.margin}
            />
          </Grid>
        </Grid>
        <TextField
          className={classes.margin}
          fullWidth={true}
          label='Nationality'
          variant='outlined'
          required
        />
        <Button
          variant='contained'
          color='primary'
          fullWidth={true}
          size='large'
          className={classes.margin}
        >
          Create
        </Button>
      </form>
    </Container>
  );
};

export default CreateNewUser;
