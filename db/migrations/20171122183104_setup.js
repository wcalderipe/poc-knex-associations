exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('applications', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
  }),
  knex.schema.createTable('features', (table) => {
    table.increments('id').primary()
    table.integer('application_id').unsigned().references('applications.id')
    table.string('name').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
  }),
  knex.schema.createTable('parameters', (table) => {
    table.increments('id').primary()
    table.integer('feature_id').unsigned().references('features.id')
    table.text('rule_json').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
])

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('applications'),
  knex.schema.dropTable('features'),
  knex.schema.dropTable('parameters')
])
