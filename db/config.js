const config = {};

config.databaseUrl = process.env.RDS_DATABASE || 'hashtablehippos.cva7riqm8hyo.us-east-2.rds.amazonaws.com';
config.databaseOptions = {
  host: process.env.RDS_HOSTNAME || 'hashtablehippos.cva7riqm8hyo.us-east-2.rds.amazonaws.com',
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  dialectOptions: {
    ssl: 'Amazon RDS',
  },
};

module.exports = config;
