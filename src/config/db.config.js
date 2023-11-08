module.exports = {

  PGUSER: 'postgres',
  PGPASSWORD: 'mysecretpassword',
  PGHOST: 'localhost',
  PGPORT: '5432',
  PGDATABASE: 'postgres',
  PGDIALECT: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};