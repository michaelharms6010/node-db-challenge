const express = require("express")

const db = require("./db-model")

const router = express.Router()

router.get("/projects", (req, res) => {
    db.getProjects()
        .then(project => {
            project.forEach(project => {
                if (project.completed) {
                    project.completed = "true"
                } else {
                    project.completed = "false"
                }
            })
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({
                message: "Error getting projects: ", err
            })
        })
})

router.get("/projects/:id", (req, res) => {
    db.getProjectById(req.params.id)
        .then(project => {
            project.forEach(project => {
                if (project.completed) {
                    project.completed = "true"
                } else {
                    project.completed = "false"
                }
                db.getProjectTasks(req.params.id).then(tasks => {
                    console.log(res)
                    project.tasks = tasks;
                    res.status(201).json(project)
                })
                
            })
            console.log('returning')
            
        })
        .catch(err => {
            res.status(500).json({
                message: "Error getting projects: ", err
            })
        })
})
router.get("/projects/:id/tasks", (req, res) => {
    db.getProjectTasks(req.params.id)
        .then(project => {
                if (project.completed) {
                    project.completed = "true"
                } else {
                    project.completed = "false"
                }  
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({
                message: "Error getting projects: ", err
            })
        })
})

router.get("/tasks", (req, res) => {
    db.getTasks()
        .then(task => {
            task.forEach(task => {
                if (task.completed == 1) {
                    task.completed = "true"
                } else {
                    task.completed = "false"
                }
            })
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(500).json({
                message: "Error getting tasks: ", err
            })
        })
})

router.get("/resources", (req, res) => {
    db.getResources()
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(500).json({
                message: "Error getting resources: ", err
            })
        })
})

router.post("/projects", (req, res) => {
    db.addProject(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({
                message: "Error adding project: ", err
            })
        })
})

router.post("/tasks", (req, res) => {
    db.addTask(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(500).json({
                message: "Error adding task: ", err
            })
        })
})

router.post("/resources", (req, res) => {
    db.addResource(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(500).json({
                message: "Error adding resource: ", err
            })
        })
})

module.exports = router