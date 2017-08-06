const config = {};

config.databaseUrl = process.env.RDS_DB_URL;
config.databaseOptions = {
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
};


module.exports = config;
