const {sqlite, psql} = require('./knexfile')
const knex = require('knex')(psql)

knex('applications as Application')
 .leftJoin('features as Feature', 'Application.id', '=', 'Feature.application_id')
.leftJoin('parameters as Parameter', 'Feature.id', '=', 'Parameter.feature_id')
  .where({ 'Application.id': 1 })
.options({ nestTables: true })
  .then((results) => {
    console.log(results)
  })
