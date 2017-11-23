const config = require('./knexfile')
const client = process.env.NODE_ENV || 'sqlite'
const knex = require('knex')(config[client])

knex('applications as Application')
 .leftJoin('features as Feature', 'Application.id', '=', 'Feature.application_id')
.leftJoin('parameters as Parameter', 'Feature.id', '=', 'Parameter.feature_id')
  .where({ 'Application.id': 1 })
.options({ nestTables: true })
  .then((results) => {
    console.log(results)
  })
