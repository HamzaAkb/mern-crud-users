import { Button, ButtonGroup, TableCell, TableRow } from '@material-ui/core';
import React from 'react';

const UserListItem = ({ row }) => {
  return (
    <TableRow key={row.name}>
      <TableCell component='th' scope='row'>
        {row.name}
      </TableCell>
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
