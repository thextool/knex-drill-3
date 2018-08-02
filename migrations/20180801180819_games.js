
exports.up = async function(knex, Promise) {
    await knex.schema.createTable('game', (table) => {
        table.increments()
        table.text('name').notNullable()
        table.text('developer').notNullable()
        table.float('rating').notNullable()
    })
};

exports.down = async function(knex, Promise) {
    await knex.schema.dropTableIfExists('game')
};
