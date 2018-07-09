// Update with your config settings.
console.log(process.env.DATABASE_URL);
module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'ViralShare'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_URL
    },
  }
};
