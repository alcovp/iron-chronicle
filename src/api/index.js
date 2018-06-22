'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

let settings = require('./settings');
const daysBriefly = require('./days_briefly');
const programsBriefly = require('./programs_briefly');
const exercisesBriefly = require('./exercises_briefly');
const days = require('./days');
const programs = require('./programs');
const exercises = require('./exercises');
const workouts = require('./workouts');

const app = express();

let nextId = 5;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/workouts', (req, res) => {
    res.send(workouts);
});

app.post('/api/workouts', (req, res) => {
    const workout = req.body;

    workouts.push(workout);

    res.send(workout);
});

app.get('/api/exercises', (req, res) => {
    res.send(exercises);
});

app.post('/api/exercises', (req, res) => {
    const exercise = req.body;

    exercises.push(exercise);

    res.send(exercise);
});

app.get('/api/days', (req, res) => {
    res.send(days);
});

app.post('/api/days', (req, res) => {
    const day = req.body;

    days.push(day);

    res.send(day);
});

app.get('/api/programs', (req, res) => {
    res.send(programs);
});

app.post('/api/programs', (req, res) => {
    const program = req.body;

    programs.push(program);

    res.send(program);
});

app.get('/api/programs-briefly', (req, res) => {
    res.send(programsBriefly);
});

app.get('/api/days-briefly', (req, res) => {
    res.send(daysBriefly);
});

app.get('/api/exercises-briefly', (req, res) => {
    res.send(exercisesBriefly);
});

app.get('/api/settings', (req, res) => {
    res.send(settings);
});

app.patch('/api/settings/:setting', (req, res) => {

    console.log(req.body);
    console.log(settings);

    settings = {
        ...settings,
        [req.params.setting]: req.body.value
    };

    console.log(settings);
    res.send(settings);
});

/*-------------------------------------------------------------------------*/
//
// app.get('/api/todos', (req, res) => {
//     res.send(todos);
// });
//
// app.post('/api/todos', (req, res) => {
//     const todo = {
//         id: nextId++,
//         title: req.body.title,
//         completed: false
//     };
//
//     todos.push(todo);
//
//     res.send(todo);
// });
//
// app.put('/api/todos/:id', (req, res) => {
//     const todo = todos.find(todo => todo.id == req.params.id);
//
//     if (!todo) return res.sendStatus(404);
//
//     todo.title = req.body.title || todo.title;
//
//     res.json(todo);
// });
//
// app.patch('/api/todos/:id', (req, res) => {
//     const todo = todos.find(todo => todo.id == req.params.id);
//
//     if (!todo) return res.sendStatus(404);
//
//     todo.completed = !todo.completed;
//
//     res.json(todo);
// });
//
// app.delete('/api/todos/:id', (req, res) => {
//     const index = todos.findIndex(todo => todo.id == req.params.id);
//
//     if (index === -1) return res.sendStatus(404);
//
//     let [todo] = todos.splice(index, 1);
//
//     res.json(todo);
// });

app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));