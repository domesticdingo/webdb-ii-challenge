
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.text('vin').notNullable();
      tbl.text('make').notNullable();
      tbl.text('model').notNullable();
      tbl.integer('mileage').notNullable();
      tbl.text('transmission');
      tbl.text('titleStatus');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
