const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let tasks = [];

// GET Route zum Abrufen aller Aufgaben
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// POST Route zum Hinzufügen einer neuen Aufgabe
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    const newTask = { title, description };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// PUT Route zum Aktualisieren einer vorhandenen Aufgabe
app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    tasks[id] = { title, description };
    res.json(tasks[id]);
});

// DELETE Route zum Löschen einer Aufgabe
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    tasks.splice(id, 1);
    res.sendStatus(204);
});

module.exports = app;
