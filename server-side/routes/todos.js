var express = require('express');
var router = express.Router();
const { v4 } = require('uuid');

const { db } = require("../mongo");



const mockTodos = [{
    id: "4387f4d8-aeac-4559-9f1b-3c5d537c955c",
    title: "Implement Fullstack ToDo List",
    description: "Implement the fullstack todo list application.",
    isComplete: false,
    priority: "High",
    creationDate: new Date(),
    lastModified: new Date(),
    completedDate: null
}, {
    id: "e365f13c-4c1d-4ee1-8a66-3dbbbab71f0d",
    title: "Create /all route for mock data",
    description: "Create an express route that will respond with the mock todo list.",
    isComplete: false,
    priority: "High",
    creationDate: new Date(),
    lastModified: new Date(),
    completedDate: null
}, {
    id: "08dd1f20-7d31-4120-89ed-343d4006a7cb",
    title: "Create a home page in the client",
    description: "Create a Home Page in React that will display all the todos.",
    isComplete: false,
    priority: "High",
    creationDate: new Date(),
    lastModified: new Date(),
    completedDate: null
}, {
    id: "98a06f8f-50c9-4832-9d2d-daa45543db00",
    title: "Create the todo card component",
    description: "Create a react ToDoCard component that will be rendered for each todo on the home page.",
    isComplete: false,
    priority: "Medium",
    creationDate: new Date(),
    lastModified: new Date(),
    completedDate: null
}, {
    id: "7c5d70bb-2a00-4009-9bb8-1bb163fb501f",
    title: "Test basic application with mock data",
    description: "Visit the client Home Page to see the todo's displayed as a list.",
    isComplete: false,
    priority: "Medium",
    creationDate: new Date(),
    lastModified: new Date(),
    completedDate: null
}]

/* GET home page. */
router.get('/all', async function (req, res, next) {

    try {
        const todoItem = await db().collection('todos').find({}).toArray();

        res.json({
            success: true,
            todo: todoItem
        });
    }
    catch (err) {
        console.log(err)
        res.json({
            success: false,
            error: err.toString()
        })
    }
});


// POSTING A NEW ONE
router.post('/create-one', async function (req, res, next) {
    try {
        console.log(req.body)

        const newTodo = {
            ...req.body,
            id: v4(),
            title: req.body.title,
            description: req.body.description,
            isComplete: false,
            priority: req.body.priority,
            creationDate: new Date(),
            lastModified: new Date(),
            completedDate: null

        }
        console.log(newTodo)
        const result = await db().collection('todos').insertOne(newTodo)

        console.log(result);

        res.json({
            success: true,
            todo: newTodo
        })
    }
    catch (err) {
        console.log(err)
        res.json({
            success: false,
            error: err.toString()
        })
    }
});



// UPDATING A NEW ONE
router.put('/update-one/:id', async function (req, res, next) {
    try {
        console.log(req.body)
        const id = req.params.id
        const isComplete = req.body.isComplete
        const lastModified = new Date()

        const todoItem = await db().collection("todos").update({ id: id }, { $set: { "isComplete": isComplete, "lastModified": lastModified } })

        res.json({
            success: true,
            todo: todoItem
        })
        console.log(todoItem)
    }

    catch (err) {
        console.log(err)
        res.json({
            success: false,
            error: err.toString()
        })
    }
})


router.delete('/delete-one/:id', async function (req, res, next) {
    try {
        const id = req.params.id

        const todoItem = await db().collection("todos").deleteOne({ id: id })

        res.json({
            success: true,
            todo: todoItem
        })
    }
    catch (err) {
        console.log(err)
        res.json({
            success: false,
            error: err.toString()
        })
    }
})


module.exports = router;
