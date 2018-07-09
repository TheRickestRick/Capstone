// Update with your config settings.

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
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'ViralShare'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
