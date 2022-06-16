var express = require('express');
var router = express.Router();
const { v4: uuid } = require('uuid');

const users = [
  {id: uuid(), name: 'james'},
  {id: uuid(), name: 'shaun'},
  {id: uuid(), name: 'andrew'}
];

/* GET request */
router.get('/', function(req, res, next) {
  return res.send(users);
});

/* POST request */
router.post('/', function(req, res, next) {
  if (!req.body.name) {
    return res.status(400).send({ message: 'User must have a name'})
  }
  const user = { id: uuid(), name: req.body.name };
  users.push(user);
  return res.send(user);
});

module.exports = router;
