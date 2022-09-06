const { Registration } = require('../models/registrations.model');

const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.findAll();

    res.status(200).json({
      status: 'succes',
      data: {
        registrations,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getOneRegistrations = async (req, res) => {
  try {
    const { id } = req.params;
    const registration = await Registration.findOne({ where: { id } });

    if (!registration) {
      return res.status(404).json({
        status: 'error',
        message: 'Registration not find',
      });
    }
    res.status(200).json({
      status: 'sucess',
      data: { registration },
    });
  } catch (error) {
    console.log(error);
  }
};

const createRegistrations = async (req, res) => {
  try {
    const { entranceTime, exitTime, status } = req.body;
    const newRegistration = await Registration.create({
      entranceTime,
      exitTime,
      status,
    });
    res.status(201).json({
      status: 'sucess',
      data: { newRegistration },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRegistrations = async (req, res) => {
  try {
    const { exitTime, status } = req.body;
    const { id } = req.params;

    const registration = await Registration.findOne({ where: { id } });

    if (!registration) {
      return res.status(404).json({
        status: 'error',
        message: 'Registration not find',
      });
    }

    await registration.update({ exitTime, status });

    res.status(200).json({
      status: 'sucess',
      data: { registration },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteRegistrations = async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    const registration = await Registration.findOne({ where: { id } });

    if (!registration) {
      return res.status(404).json({
        status: 'error',
        message: 'Registration not find',
      });
    }

    await registration.update({ status });

    res.status(200).json({
      status: 'sucess',
      data: {
        registration,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRegistrations,
  getOneRegistrations,
  createRegistrations,
  updateRegistrations,
  deleteRegistrations,
};
