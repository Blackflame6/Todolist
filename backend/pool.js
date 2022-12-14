const { Pool } = require("pg");

require("dotenv").config();


const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
};
const connectionString = process.env.DATABASE_URL;
const proConfig = {
  connectionString
};
const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);

module.exports = pool;
