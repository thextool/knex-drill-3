
exports.up = function(knex, Promise) {
    return knex.schema.createTable('game', (table) => {
        table.increments()
        table.text('name').notNullable()
        table.text('developer').notNullable()
        table.float('rating').notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('game')
};
