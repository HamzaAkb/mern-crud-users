const router = require('express').Router();
let User = require('../models/userModel');

router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const gender = req.body.gender;
  const nationality = req.body.nationality;

  const newUser = new User({ name, age, gender, nationality });

  newUser
    .save()
    .then(() => res.json('User added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
