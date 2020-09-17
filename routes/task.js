const express = require('express');
const task = require('../models/task');
const router = express.Router();
const taskservice = new (require('../services')).TaskService();

router.route('/')
    .get(async (req, res, next) => {
        try {
            let tasks = await taskservice.readAllTasks();
            console.log(tasks);
            res.json(tasks);
        }
        catch (err) {
            console.error(err);
            next(err);
        }
    })
    .post(async (req, res, next) => {
        try {
            let task = await taskservice.createTask(req.body);
            console.log(task);
            return res.status(200).json(task);
        }
        catch (err) {
            console.error(err);
            next(err);
        }
    });

router.route('/:id')
    .get(async (req, res, next) => {
        try {
            let task = await taskservice.readTask(req.params.id);
            console.log(task);
            res.json(task);
        }
        catch (err) {
            console.error(err);
            next(err);
        }
    })
    .patch(async (req, res, next) => {
        try {
            const id = req.params.id;
            let task = await taskservice.updateTask(req.body, req.params.id);
            res.json(task);
        }
        catch (err) {
            console.error(err);
            next(err);
        };
    })
    .delete(async (req, res, next) => {
        const id = req.params.id;
        try {
            let task = await taskservice.deleteTask(id);
            console.log(task);
            res.json(task);
        }
        catch (err) {
            console.error(err);
            next(err);
        }
    });

module.exports = router;