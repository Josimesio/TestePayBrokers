import { Knex } from 'knex';

import { ETableNames } from '../ETableNames';


export async function up(knex: Knex) {
  return knex
    .schema
    .createTable(ETableNames.Produto_api_A, table => {
      table.bigIncrements('id').primary().index();
      table.string('Nome', 150).index().notNullable();
      table.string('Descricao', 255).index().notNullable();
      table.decimal('Valor').index().notNullable();


      table.comment('Tabela usada para armazenar Produtos A do sistema.');
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.Produto_api_A}`);
    });
}

export async function down(knex: Knex) {
  return knex
    .schema
    .dropTable(ETableNames.Produto_api_A)
    .then(() => {
      console.log(`# Dropped table ${ETableNames.Produto_api_A}`);
    });
}