module.exports = {
  sqlite: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './db/development.sqlite3'
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },
  psql: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'postgres',
      database : 'postgres'
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
}
