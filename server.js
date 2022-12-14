const { app } = require('./app');
const { db } = require('./utils/database.util');

const startServer = async () => {
  try {
    await db.authenticate(); //authenticate database
    await db.sync(); //synchronize database

    const PORT = 4001;

    app.listen(PORT, () => {
      console.log('express app running');
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
