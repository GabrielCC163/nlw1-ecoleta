import Knex from 'knex'; //quando refere-se ao tipo, coloca-se com letra maiúscula

export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('items');
}