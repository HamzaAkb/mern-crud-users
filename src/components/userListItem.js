import { Button, ButtonGroup, TableCell, TableRow } from '@material-ui/core';
import React from 'react';

const UserListItem = ({ row }) => {
  /* const deleteHandler = () => {
    console.log('WE HERE');
    const instance = axios.create({ baseURL: 'http://localhost:5000' });

    instance
      .delete(`/api/users/${row._id}`)
      .then((response) => {
        console.log('User Added');
      })
      .catch((error) => {
        console.log(error);
      });
  }; */

  return (
    <TableRow key={row.name}>
      <TableCell>{row.name}</TableCell>
      <TableCell align='right'>{row.age}</TableCell>
      <TableCell align='right'>{row.gender}</TableCell>
      <TableCell align='right'>{row.nationality}</TableCell>
      <TableCell align='center'>
        <ButtonGroup>
          <Button variant='contained' color='primary'>
            Edit
          </Button>
          <Button variant='contained' color='secondary'>
            Delete
          </Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

export default UserListItem;
