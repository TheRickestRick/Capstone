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
      user: '',
      password: 'password'
      database: process.env.DATABASE_URL
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
