const express = require('express');
const {
  getAllRegistrations,
  getOneRegistrations,
  createRegistrations,
  updateRegistrations,
} = require('../controller/registration.controller');

const registrationRouter = express.Router();

registrationRouter.get('/', getAllRegistrations);
registrationRouter.get('/:id', getOneRegistrations);
registrationRouter.post('/', createRegistrations);
registrationRouter.patch('/:id', updateRegistrations);

module.exports = { registrationRouter };
