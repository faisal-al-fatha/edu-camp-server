const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const courses = require('./Data/courses.json')

app.get('/courses', (req, res) =>{
    res.send(courses)
})

app.listen(port, ()=>{
    console.log('Server running', port);
})
