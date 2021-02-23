const express = require('express');
const cors = require('cors');
const mongoose = require(`mongoose`);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =
  'mongodb+srv://hamza:hamza@mern-crud-users.eqpvx.mongodb.net/mern-crud-users';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const usersRouter = require('./routes/userRoutes');

app.use('/api/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
