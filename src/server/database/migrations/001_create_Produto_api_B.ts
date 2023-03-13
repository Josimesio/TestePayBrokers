/*import { Knex } from 'knex';

import { ETableNames } from '../ETableName';


export async function up(knex: Knex) {
  return knex
    .schema
    .createTable(ETableNames.Produto_api_B, table => {
      table.bigIncrements('id').primary().index();
      table.string('Nome', 150).index().notNullable();
      table.string('Descricao', 255).index().notNullable();
      table.comment('Tabela usada para armazenar Produtos B do sistema.');
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.Produto_api_B}`);
    });
}

export async function down(knex: Knex) {
  return knex
    .schema
    .dropTable(ETableNames.Produto_api_B)
    .then(() => {
      console.log(`# Dropped table ${ETableNames.Produto_api_B}`);
    });
}*/
