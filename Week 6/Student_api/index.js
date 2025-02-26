const express = require('express'); //import express package
const app = express();

//Student Data
const students = [
    { id: 1, name: 'John Wick', department: 'Mathematics' },
    { id: 2, name: 'Jenifer Lopez', department: 'Mathematics' },
    { id: 3, name: 'Ben Ken', department: 'Statistics' },
];

//Get all students
app.get('/students', function (req, res) {
    res.status(200).send(students);
});


//Get a single student
app.get('/students/:student_id', function (req, res) {   //":student_id = param"
    const student_id = parseInt(req.params.student_id); //parseInt = convert string to number

    //Find student in array
    const student = students.find((student_item) => {
        return student_item.id === student_id;
    });

    if (student) {
        res.status(200).send(student);
    } else {
        res.status(404).send('Student not found');
    }
});


//Create a new student

//Update a student 

//Update only department of a student

//Delete a student 


//Webserver
app.listen(3000, function () {
    console.log('Server is running on port 3000...')
});

/*/HTTP Status
 Success:200
 Created Successfully: 201
 Validation Error: 400
 Authentication Error: 401
 Data Missing: 404
 Internal Server Error: 500 /*/