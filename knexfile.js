module.exports = {
  development: {
    client: 'pg',
    connection:'postgres://localhost:/knex-3'  
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
