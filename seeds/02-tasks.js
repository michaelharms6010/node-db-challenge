exports.seed = function(knex) {
    return knex('tasks').insert([
        {task_description: 'Rapid-fire job apps', project_id: 1},
        {task_description: 'Buy Good Alts', project_id: 2},
        {task_description: 'Play Dota', project_id: 3},
        {task_description: 'Ask for $100k+', project_id: 1}
    ])
}