exports.seed = function(knex) {
    return knex('projects').insert([
        {project_name: 'Get Good Job', project_description: 'They need you more than you need them'},
        {project_name: 'Get Rich', project_description: 'do$h'},
        {project_name: 'Relax'}
    ])
}