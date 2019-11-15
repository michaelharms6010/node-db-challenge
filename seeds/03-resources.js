exports.seed = function(knex) {
    return knex('resources').insert([
        {resource_name: 'Twitter'},
        {resource_name: 'LinkedIn'},
        {resource_name: 'Lambda'},
        {resource_name: 'Zac'},
        {resource_name: 'Scott'},
        {resource_name: 'Wikipedia'},
    ])
}