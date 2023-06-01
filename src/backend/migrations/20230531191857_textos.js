exports.up = function(knex) {
    return knex.schema.createTable('textos', (table)=>{
        table.string('titulo').notNullable()
        table.text('texto', 'TEXT').notNullable()
        table.string('classificacao').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('textos')
};
