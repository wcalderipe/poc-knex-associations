const config = require('./knexfile').development
const knex = require('knex')(config)

knex('applications as Application')
  .leftJoin('features as Feature', 'Application.id', '=', 'Feature.application_id')
//.leftJoin('parameters as Parameter', 'Feature.id', '=', 'Parameter.feature_id')
  .where({ 'Application.id': 1 })
  .options({ nestTables: true, rowMode: 'array' })
  .then((results) => {
    console.log(results)
  })
