const express = require('express');

const app = express();

//Routers
const { registrationRouter } = require('./routes/registration.routes');
app.use(express.json());

//use routers

app.use('/api/v1/registrations', registrationRouter);

//Catch non-existing endpoints -- preguntar!

app.all('*', (req, res) => {
  res.status(404).json({
    status: 'Error',
    message: `${req.method} ${req.url} does not exists ir our server`,
  });
});

module.exports = { app };
