
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {name: "at home"},
        {name: "at work"},
        {name: "on computer"},
        {name: "while driving"}
      ]);
    });
};
