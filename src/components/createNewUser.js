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
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const genderHandler = (e) => {
    setGender(e.target.value);
  };

  const nationalityHandler = (e) => {
    setNationality(e.target.value);
  };

  const submitHandler = () => {
    const instance = axios.create({ baseURL: 'http://localhost:5000' });

    instance
      .post('/api/users/add', { name, age, gender, nationality })
      .then((response) => {
        console.log('User Added');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container maxWidth='sm' className={classes.container}>
      <form>
        <TextField
          className={classes.margin}
          fullWidth
          label='Name'
          variant='outlined'
          onChange={nameHandler}
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
              <Select label='Gender' labelId='demo' onChange={genderHandler}>
                <MenuItem value={'Male'}>Male</MenuItem>
                <MenuItem value={'Female'}>Female</MenuItem>
                <MenuItem value={'Other'}>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs='6'>
            <TextField
              variant='outlined'
              fullWidth={true}
              label='Age'
              value={age}
              onChange={ageHandler}
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
          value={nationality}
          onChange={nationalityHandler}
          required
        />
        <Link to={{ pathname: '/' }} className={classes.textDecoration}>
          <Button
            variant='contained'
            color='primary'
            fullWidth={true}
            size='large'
            onClick={submitHandler}
            className={classes.margin}
          >
            Create
          </Button>
        </Link>
      </form>
    </Container>
  );
};

export default CreateNewUser;
