require('dotenv').config();

const { DEV_DATABASE_URL, DATABASE_URL, TEST_DATABASE_URL } = process.env;
console.log(DEV_DATABASE_URL);

module.exports = {
  development: {
    url: DEV_DATABASE_URL,
    dialect: 'postgres',
    database: 'DEV_DATABASE_URL',
    logging: false,
  },
  test: {
    url: TEST_DATABASE_URL,
    dialect: 'postgres',
    logging: false,
  },
  production: {
    url: DATABASE_URL,
    dialect: 'postgres',
    database: 'DATABASE_URL',
    logging: false,
  },
};
