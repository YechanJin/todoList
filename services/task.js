const { Task } = require('../models');
const { Op } = require('sequelize');

const TaskService = class {
    constructor() {
        this.Task = Task;
    }

    async createTask(_task) {
        const res = await Task.create({
            state: _task.state,
            content: _task.content,
        });
        return res;
    }

    async readTask(_id) {
        try {
            const res = await Task.findOne({
                where: { id: _id },
            });
            return res;
        }
        catch(err) {
           console.error(err);
           next(err);
        }
    }

    async updateTask(_task, _id) {
        const res = await Task.update({
            state: _task.state,
            content: _task.content,
        }, {
            where: { id: _id },
        });
        return res;
    }

    async deleteTask(_id) {
        const res = await Task.destroy({
            where: { id: _id },
        });
        return res;
    }

    async readAllTasks() {
        const tasks = await Task.findAll({});
        return tasks;
    }

}
module.exports = TaskService;
