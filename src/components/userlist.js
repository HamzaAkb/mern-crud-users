import {
  Container,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserListItem from './userListItem';

const useStyles = makeStyles({
  container: {
    marginTop: '100px',
  },
  textAlign: {
    textAlign: 'center',
  },
});

const createData = (name, age, gender, nationality) => {
  return { name, age, gender, nationality };
};

const rows = [
  createData('Hamza Akbar', 21, 'Male', 'Pakistani'),
  createData('Moutasim Akbar', 18, 'Male', 'British'),
  createData('Fahad Hussain', 22, 'Male', 'French'),
  createData('Abdul Haseeb', 23, 'Male', 'German'),
];

const Userlist = () => {
  const classes = useStyles();

  const [data, setData] = useState({});
  const [dataSet, setDataSet] = useState(false);

  useEffect(() => {
    const instance = axios.create({ baseURL: 'http://localhost:5000' });

    instance
      .get('/api/users')
      .then((response) => {
        setData(response.data);
        setDataSet(true);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <Container maxWidth='md' className={classes.container}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='right'>Age</TableCell>
              <TableCell align='right'>Gender</TableCell>
              <TableCell align='right'>Nationality</TableCell>
              <TableCell align='right' className={classes.textAlign}>
                Edit/Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataSet === true
              ? data.map((row) => (
                  <UserListItem key={Math.random()} row={row} />
                ))
              : ''}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Userlist;
