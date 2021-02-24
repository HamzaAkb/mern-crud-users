import {
  Button,
  ButtonGroup,
  Container,
  Dialog,
  DialogContent,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles({
  container: {
    marginTop: '100px',
  },
  textAlign: {
    textAlign: 'center',
  },
  textField: {
    marginBottom: '15px',
  },
});

const Userlist = () => {
  const classes = useStyles();

  const [data, setData] = useState({});
  const [dataSet, setDataSet] = useState(false);
  const [open, setOpen] = useState(false);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');

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

  const deleteHandler = (id) => {
    const instance = axios.create({ baseURL: 'http://localhost:5000' });

    instance
      .delete(`/api/users/${id}`)
      .then((response) => {
        console.log('User Added');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickOpen = (item) => {
    setOpen(true);
    setName(item.name);
    setAge(item.age);
    setGender(item.gender);
    setNationality(item.nationality);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateHandler = (id) => {
    axios
      .post('http://localhost:5000/api/users/update/' + id, {
        name,
        age,
        gender,
        nationality,
      })
      .then((res) => console.log(res.data));

    window.location = '/';
    setOpen(false);
  };

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
                  <TableRow key={row.name}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell align='right'>{row.age}</TableCell>
                    <TableCell align='right'>{row.gender}</TableCell>
                    <TableCell align='right'>{row.nationality}</TableCell>
                    <TableCell align='center'>
                      <ButtonGroup>
                        <Button
                          onClick={() => handleClickOpen(row)}
                          variant='contained'
                          color='primary'
                        >
                          Edit
                        </Button>
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          aria-labelledby='draggable-dialog-title'
                        >
                          <DialogContent>
                            <Container
                              style={{ marginTop: '25px' }}
                              className={classes.container}
                              maxWidth={'sm'}
                            >
                              <form className={classes.formStyle}>
                                <Typography
                                  className={classes.headline}
                                  variant='h5'
                                >
                                  Edit Details
                                </Typography>
                                <TextField
                                  className={classes.textField}
                                  fullWidth={true}
                                  required
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                />
                                <TextField
                                  className={classes.textField}
                                  fullWidth={true}
                                  value={age}
                                  inputProps={{ maxLength: 2 }}
                                  required
                                  onChange={(e) => setAge(e.target.value)}
                                />
                                <TextField
                                  className={classes.textField}
                                  fullWidth={true}
                                  value={gender}
                                  required
                                  onChange={(e) => setGender(e.target.value)}
                                />
                                <TextField
                                  className={classes.textField}
                                  fullWidth={true}
                                  required
                                  value={nationality}
                                  onChange={(e) =>
                                    setNationality(e.target.value)
                                  }
                                />
                                <Button
                                  fullWidth={true}
                                  variant='contained'
                                  color='primary'
                                  size='large'
                                  style={{ marginBottom: '25px' }}
                                  onClick={() => updateHandler(row._id)}
                                >
                                  Update
                                </Button>
                              </form>
                            </Container>
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant='contained'
                          color='secondary'
                          onClick={() => deleteHandler(row._id)}
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))
              : ''}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Userlist;
