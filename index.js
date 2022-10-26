const express = require('express');
const app = express();

const courses = require('./Data/courses.json')

app.get('/', (req, res) =>{
    res.send(courses)
})

app.listen(port, ()=>{
    console.log('Server running', port);
})
