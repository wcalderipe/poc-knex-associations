const migrations = {
  directory: './db/migrations',
  tableName: 'migrations'
}
const seeds = {
  directory: './db/seeds'
}

module.exports = {
  sqlite: {
    client: 'sqlite3',
    migrations,
    seeds,
    useNullAsDefault: true,
    connection: {
      filename: './db/development.sqlite3'
    }
  },
  psql: {
    client: 'pg',
    migrations,
    seeds,
    useNullAsDefault: true,
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'postgres',
      database : 'postgres'
    }
  },
  mysql: {
    client: 'mysql',
    migrations,
    seeds,
    useNullAsDefault: true,
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'root',
      database : 'poc_knex_associations'
    }
  }
}
