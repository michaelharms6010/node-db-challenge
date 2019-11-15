const db = require("../data/db-config")

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addTask,
    addResource,
    getProjectById,
    getProjectTasks,
    getProjectTasks
}
 
function getProjects() {
    return db("projects")
}

function getProjectById(id) {
    return db("projects as p")
    .where({id})


    // .then(response => {
    //     response.actions = getProjectTasks(id)
    // });
}



function getTasks() {
    return db("tasks as t")
        .join("projects as p", "t.project_id", "p.id")
        .select("t.task_description", "t.task_notes", "t.completed", "p.project_name", "p.project_description")
}

function getProjectTasks(project_id) {
    return db("tasks")
        .where({project_id: project_id})
}

function getResources() {
    return db("resources")
}

function addProject(project) {
    return db("projects").insert(project)
}

function addTask(task) {
    return db("tasks").insert(task)
}

function addResource(resource) {
    return db("resources").insert(resource)
}