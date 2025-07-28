const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.PGUSER || "your_db_user",
  host: process.env.PGHOST || "localhost",
  database: process.env.PGDATABASE || "your_db_name",
  password: process.env.PGPASSWORD || "your_db_password",
  port: process.env.PGPORT || 5432,
});

module.exports = pool;
